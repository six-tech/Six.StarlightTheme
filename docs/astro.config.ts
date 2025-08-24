import path from 'node:path'
import { fileURLToPath } from 'node:url'
import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

import starlightThemeSix from 'starlight-theme-six'
import { getFavIcons } from './config/favicons'
import { devServerFileWatcher } from './config/integrations/dev-server-file-watcher'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://astro.build/config
export default defineConfig({
  site: 'https://starlight-theme-six.vercel.app/',

  integrations: [
    devServerFileWatcher([
      '../package.json',
      '../src/**/*.ts',
      '../src/**/*.json',
    ]),
    starlight({
      logo: {
        dark: './src/assets/six-logo-mini-mono-140-128-light.svg',
        light: './src/assets/six-logo-mini-mono-140-128-dark.svg',
        alt: 'Six Theme for Astro.js Starlight',
      },
      title: 'SIX Theme',
      head: [
        ...getFavIcons(), // Inserts the favicons, apple icons and manifest.json into the <head> tag
      ],
      editLink: {
        baseUrl: 'https://github.com/six-tech/starlight-theme-six/edit/main/docs/',
      },
      customCss: [
        './src/styles/global.css',
      ],
      tableOfContents: {
        minHeadingLevel: 1, // Include H1 from document content
        maxHeadingLevel: 5, // Include up to H5
      },
      plugins: [
        starlightThemeSix({
          navLinks: [
            {
              label: 'Docs',
              link: '/getting-started',
            },
            {
              label: 'Starlight',
              link: 'https://starlight.astro.build',
              badge: 'External',
              attrs: {
                target: '_blank',
                rel: 'noopener',
              },
            },
          ],
        }),
      ],
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { slug: 'getting-started' },
            { slug: 'customization' },
            { slug: 'favicon-and-manifest', badge: 'New' },
          ],
        },
        {
          label: 'Examples',
          items: [
            { slug: 'examples/asides' },
            { slug: 'examples/badges' },
            { slug: 'examples/banner' },
            { slug: 'examples/cards' },
            { slug: 'examples/code-blocks' },
            { slug: 'examples/file-tree' },
            { slug: 'examples/markdown' },
            { slug: 'examples/steps' },
            { slug: 'examples/tabs' },
          ],
        },
        {
          label: 'Six Components',
          items: [
            { slug: 'six/hero-x' },
            { slug: 'six/youtube-x' },
            { slug: 'six/figma-x', badge: 'New' },
            { slug: 'six/grid-x' },
            { slug: 'six/container-section-x' },
          ],
        },
      ],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/six-tech/starlight-theme-six' },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@six-theme': path.resolve(__dirname, '../src'),
      },
    },
  },
})
