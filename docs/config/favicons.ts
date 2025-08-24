/**
 * Configuration for favicon, manifest, and other head elements
 */
interface HeadElement {
  tag: 'title' | 'link' | 'style' | 'base' | 'meta' | 'script' | 'noscript' | 'template'
  attrs?: Record<string, string | boolean | undefined> | undefined
  content?: string | undefined
}

export function getFavIcons(): readonly HeadElement[] {
  return [
    // Favicon for modern browsers
    {
      tag: 'link',
      attrs: {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/Six.StarlightTheme/favicon.svg',
      },
    },
    {
      tag: 'link',
      attrs: {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/Six.StarlightTheme/icon-192.png',
      },
    },
    {
      tag: 'link',
      attrs: {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        href: '/Six.StarlightTheme/icon-512.png',
      },
    },
    {
      tag: 'link',
      attrs: {
        rel: 'icon',
        type: 'image/png',
        sizes: '64x64',
        href: '/Six.StarlightTheme/icon-64.png',
      },
    },
    // Apple Touch Icon for iOS devices
    {
      tag: 'link',
      attrs: {
        rel: 'apple-touch-icon',
        sizes: '192x192',
        href: '/Six.StarlightTheme/icon-192.png',
      },
    },
    // Web App Manifest
    {
      tag: 'link',
      attrs: {
        rel: 'manifest',
        href: '/Six.StarlightTheme/manifest.json',
      },
    },
    // Theme color for mobile browsers
    {
      tag: 'meta',
      attrs: {
        name: 'theme-color',
        content: '#0E0E0E',
      },
    },
  ] as const
}
