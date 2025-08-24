/* eslint-disable ts/explicit-function-return-type */
/* eslint-disable accessor-pairs */
/* eslint-disable ts/strict-boolean-expressions */
import { PAGE_TITLE_ID } from '../../constants'

export class StarlightTOC extends HTMLElement {
  private _current = this.querySelector<HTMLAnchorElement>('a[aria-current="true"]')
  private minH = Number.parseInt(this.dataset.minH || '2', 10)
  private maxH = Number.parseInt(this.dataset.maxH || '3', 10)

  protected set current(link: HTMLAnchorElement) {
    if (link === this._current)
      return

    if (this._current)
      this._current.removeAttribute('aria-current')

    link.setAttribute('aria-current', 'true')
    this._current = link
  }

  private onIdle = (cb: IdleRequestCallback) =>
    (window.requestIdleCallback || (cb => setTimeout(cb, 1)))(cb)

  constructor() {
    super()
    this.onIdle(() => this.init())
  }

  private init = (): void => {
    /** All the links in the table of contents. */
    const links = [...this.querySelectorAll('a')]

    /** Test if an element is a table-of-contents heading. */
    const isHeading = (el: Element): el is HTMLHeadingElement => {
      if (el instanceof HTMLHeadingElement) {
        // Skip page title h1 - it should not be in TOC
        if (el.id === PAGE_TITLE_ID)
          return false
        // Check the heading level is within the user-configured limits for the ToC
        const level = el.tagName[1]
        if (level) {
          const int = Number.parseInt(level, 10)
          if (int >= this.minH && int <= this.maxH)
            return true
        }
      }
      return false
    }

    // Flag to temporarily disable observer updates after clicking
    let ignoreNextIntersection = false

    /** Handle click events on TOC links */
    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (!target || !target.hash)
        return

      // Set the clicked link as current immediately
      this.current = target

      // Temporarily ignore intersection observer updates
      ignoreNextIntersection = true
      setTimeout(() => {
        ignoreNextIntersection = false
      }, 500)
    }

    // Add click event listeners to all TOC links
    links.forEach((link) => {
      link.addEventListener('click', handleLinkClick)
    })

    /** Find the nearest preceding heading for an element. */
    const getElementHeading = (el: Element | null): HTMLHeadingElement | null => {
      if (!el)
        return null

      // If the element itself is a heading, return it
      if (isHeading(el))
        return el

      // Get all headings in the document
      const allHeadings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
        .filter(h => isHeading(h as HTMLHeadingElement)) as HTMLHeadingElement[]

      if (allHeadings.length === 0)
        return null

      // Find the position of the current element
      const elementRect = el.getBoundingClientRect()
      const elementTop = elementRect.top + window.scrollY

      // Find the nearest preceding heading
      let nearestHeading: HTMLHeadingElement | null = null
      let nearestDistance = Infinity

      for (const heading of allHeadings) {
        const headingRect = heading.getBoundingClientRect()
        const headingTop = headingRect.top + window.scrollY

        // Only consider headings that come before or at the same position as the element
        if (headingTop <= elementTop) {
          const distance = elementTop - headingTop
          if (distance < nearestDistance) {
            nearestDistance = distance
            nearestHeading = heading
          }
        }
      }

      return nearestHeading
    }

    /** Handle intersections and set the current link to the heading for the current intersection. */
    const setCurrent: IntersectionObserverCallback = (entries) => {
      // Skip if we're ignoring intersections after a click
      if (ignoreNextIntersection)
        return

      for (const { isIntersecting, target } of entries) {
        if (!isIntersecting)
          continue

        const heading = getElementHeading(target)
        if (!heading)
          continue

        const link = links.find(link => link.hash === `#${encodeURIComponent(heading.id)}`)
        if (link) {
          this.current = link
          break
        }
      }
    }

    /** Set initial active link based on current scroll position */
    const setInitialActive = () => {
      // Find headings that are actually in the TOC (excluding page title)
      const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
        .filter(h => isHeading(h) && h.id !== PAGE_TITLE_ID) as HTMLHeadingElement[]

      if (headings.length === 0)
        return

      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      // If we're at the very top of the page, select the first heading in TOC
      if (scrollY < 100) {
        const firstLink = links[0]
        if (firstLink) {
          this.current = firstLink
        }
        return
      }

      // Find the heading that's currently most visible
      let activeHeading = headings[0]

      for (const heading of headings) {
        const rect = heading.getBoundingClientRect()
        const headingTop = rect.top + scrollY

        // If heading is above current scroll position, it could be the active one
        if (headingTop <= scrollY + windowHeight / 3) {
          activeHeading = heading
        }
        else {
          break
        }
      }

      // Set the corresponding link as active
      const link = links.find(link => link.hash === `#${encodeURIComponent(activeHeading.id)}`)
      if (link) {
        this.current = link
      }
    }

    // Observe elements with an `id` (most likely headings) and their siblings.
    // Also observe direct children of `.content` to include elements before
    // the first heading.
    const toObserve = document.querySelectorAll('main [id], main [id] ~ *, main .content > *')

    let observer: IntersectionObserver | undefined
    const observe = () => {
      if (observer)
        return
      observer = new IntersectionObserver(setCurrent, { rootMargin: this.getRootMargin() })
      toObserve.forEach(h => observer!.observe(h))
    }

    // Start observing
    observe()

    // Set initial active link on page load with a small delay to ensure DOM is ready
    setTimeout(() => {
      setInitialActive()
    }, 50)

    // Add scroll listener as backup for better accuracy
    let scrollTimeout: NodeJS.Timeout
    window.addEventListener('scroll', () => {
      if (ignoreNextIntersection)
        return

      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        setInitialActive()
      }, 100)
    })

    let timeout: NodeJS.Timeout
    window.addEventListener('resize', () => {
      // Disable intersection observer while window is resizing.
      if (observer) {
        observer.disconnect()
        observer = undefined
      }
      clearTimeout(timeout)
      timeout = setTimeout(() => this.onIdle(observe), 200)
    })
  }

  private getRootMargin(): `-${number}px 0% ${number}px` {
    const navBarHeight = document.querySelector('header')?.getBoundingClientRect().height || 0
    // `<summary>` only exists in mobile ToC, so will fall back to 0 in large viewport component.
    const mobileTocHeight = this.querySelector('summary')?.getBoundingClientRect().height || 0
    /** Start intersections at nav height + 2rem padding. */
    const top = navBarHeight + mobileTocHeight + 32
    /** End intersections `53px` later. This is slightly more than the maximum `margin-top` in Markdown content. */
    const bottom = top + 53
    const height = document.documentElement.clientHeight
    return `-${top}px 0% ${bottom - height}px`
  }
}

customElements.define('starlight-toc', StarlightTOC)
