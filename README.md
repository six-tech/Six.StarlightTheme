# Six - Starlight Theme

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

![Six theme](./assets/six-starlight-banner-wide-1980-01.png 'Six - Clean and modern Starlight theme')

Clean and modern **Astro.js Starlight** theme

**Six** is a clean, modern, and highly customizable Starlight theme designed for developers and teams who want a
professional documentation experience. Built with flexibility and performance in mind by [**Six Technology**](https://six.technology),
it provides an elegant design that works seamlessly across all devices.

![Six theme](./assets/six-theme.png 'Six - Clean and modern Starlight theme')

## Installation

### Prerequisites

- Node.js 18+
- pnpm
- Astro 5.0+
- Starlight 0.30+

### Quick Start

1. **Install the theme and required fonts:**

   ```bash
   pnpm install starlight-theme-six @fontsource/inter @fontsource/jetbrains-mono
   ```

2. **Add to your Starlight configuration:**

   ```ts
   import starlight from '@astrojs/starlight'
   // astro.config.ts
   import { defineConfig } from 'astro/config'
   import starlightThemeSix from 'starlight-theme-six'

   export default defineConfig({
     integrations: [
       starlight({
         plugins: [
           starlightThemeSix({
             // Optional: Add navigation links
             navLinks: [
               {
                 label: 'GitHub',
                 link: 'https://github.com/your-repo',
                 attrs: { target: '_blank' }
               }
             ],
             // Optional: Custom footer text
             footerText: 'Built with ❤️ by your team'
           })
         ]
       })
     ]
   })
   ```

3. **Start developing:**
   ```bash
   pnpm run dev
   ```

## Quick Customizations

- **navLinks**: Add custom navigation links to the sidebar
- **footerText**: Customize the footer text
- **customCss**: Add additional CSS files

## Custom Components

**Six** includes several custom components to enhance your documentation:

- **HeroX**: Full-width hero sections with customizable content.
- **GridX**: Flexible grid layouts for showcasing features (similar to, for example, Boostrap column grid).
- **ContainerSectionX**: Container components with various layouts.
- **FigmaX**: Embed Figma designs in the documentation page.
- **YouTubeX**: YouTube video embeds.

## Origin

This theme is based on the excellent [Starlight Black Theme](https://github.com/adrian-ub/starlight-theme-black) by
[Adrián UB](https://github.com/adrian-ub).

[MIT](./LICENSE) License © 2025-PRESENT [Six Technology](https://six.technology)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/starlight-theme-six?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/starlight-theme-six
[npm-downloads-src]: https://img.shields.io/npm/dm/starlight-theme-six?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://www.npmjs.com/package/starlight-theme-six
[license-src]: https://img.shields.io/github/license/six-tech/Six.StarlightTheme.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/six-tech/Six.StarlightTheme/blob/main/LICENSE
