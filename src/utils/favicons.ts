/**
 * Configuration for favicon, manifest, and other head elements
 * This utility helps users set up favicons and manifest files for their Starlight sites
 */

interface HeadElement {
  tag: 'title' | 'link' | 'style' | 'base' | 'meta' | 'script' | 'noscript' | 'template'
  attrs?: Record<string, string | boolean | undefined> | undefined
  content?: string | undefined
}

interface FaviconOptions {
  /**
   * Base path for the favicon files. Defaults to '/' for root deployment.
   * For GitHub Pages or subdirectory deployments, set this to your base path (e.g., '/my-project/')
   */
  basePath?: string
  /**
   * Theme color for mobile browsers. Defaults to '#0E0E0E' (dark theme color)
   */
  themeColor?: string
}

/**
 * Generates favicon and manifest head elements for Astro Starlight
 *
 * @param options Configuration options for favicon paths and theme color
 * @returns Array of head elements to be used in Astro config
 *
 * @example
 * ```ts
 * // astro.config.ts
 * import { getFavIcons } from '@six-tech/starlight-theme-six/utils/favicons'
 *
 * export default defineConfig({
 *   integrations: [
 *     starlight({
 *       head: [
 *         ...getFavIcons({ basePath: '/my-docs/' }), // For subdirectory deployment
 *         // ...other head elements
 *       ],
 *       // ...rest of config
 *     })
 *   ]
 * })
 * ```
 *
 * @example
 * ```ts
 * // For root deployment (default)
 * ...getFavIcons()
 * ```
 */
export function getFavIcons(options: FaviconOptions = {}): readonly HeadElement[] {
  const { basePath = '/', themeColor = '#0E0E0E' } = options

  // Ensure basePath ends with / but doesn't have double slashes
  const normalizedBasePath = basePath === '/' ? '/' : `${basePath.replace(/\/+$/, '')}/`

  return [
    // Favicon for modern browsers
    {
      tag: 'link',
      attrs: {
        rel: 'icon',
        type: 'image/svg+xml',
        href: `${normalizedBasePath}favicon.svg`,
      },
    },
    {
      tag: 'link',
      attrs: {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: `${normalizedBasePath}icon-192.png`,
      },
    },
    {
      tag: 'link',
      attrs: {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        href: `${normalizedBasePath}icon-512.png`,
      },
    },
    {
      tag: 'link',
      attrs: {
        rel: 'icon',
        type: 'image/png',
        sizes: '64x64',
        href: `${normalizedBasePath}icon-64.png`,
      },
    },
    // Apple Touch Icon for iOS devices
    {
      tag: 'link',
      attrs: {
        rel: 'apple-touch-icon',
        sizes: '192x192',
        href: `${normalizedBasePath}icon-192.png`,
      },
    },
    // Web App Manifest
    {
      tag: 'link',
      attrs: {
        rel: 'manifest',
        href: `${normalizedBasePath}manifest.json`,
      },
    },
    // Theme color for mobile browsers
    {
      tag: 'meta',
      attrs: {
        name: 'theme-color',
        content: themeColor,
      },
    },
  ] as const
}
