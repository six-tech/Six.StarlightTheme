import type { StarlightPlugin } from '@astrojs/starlight/types'

import { createInlineSvgUrl } from '@astrojs/starlight/expressive-code'

import { StarlightThemeSixConfigSchema, type StarlightThemeSixUserConfig } from './libs/config'
import { overrideComponents } from './libs/starlight'
import { vitePluginStarlightThemeSix } from './libs/vite'
import translations from './translations'

export default function starlightThemeSix(userConfig: StarlightThemeSixUserConfig): StarlightPlugin {
  const parsedConfig = StarlightThemeSixConfigSchema.safeParse(userConfig)

  if (!parsedConfig.success) {
    throw new Error(`The provided plugin configuration is invalid.\n${parsedConfig.error.issues.map(issue => issue.message).join('\n')}`)
  }

  const config = parsedConfig.data

  return {
    name: 'starlight-theme-six-plugin',
    hooks: {
      'astro:config:setup': function ({ updateConfig: updateAstroConfig }: { updateConfig: (config: Record<string, any>) => void }) {
        // Configure Squoosh as the default image service to avoid Sharp dependency issues
        updateAstroConfig({
          image: {
            service: 'squoosh',
          },
        })
      },
      'config:setup': function ({ config: starlightConfig, logger, updateConfig, addIntegration }) {
        const userExpressiveCodeConfig
          = starlightConfig.expressiveCode === false || starlightConfig.expressiveCode === true ? {} : starlightConfig.expressiveCode

        // Set up default configuration values
        const defaultConfig: Partial<typeof starlightConfig> = {}

        // Default logo (only if user hasn't provided one)
        if (starlightConfig.logo === undefined) {
          defaultConfig.logo = {
            dark: '@six-tech/starlight-theme-six/assets/six-logo-mini-gradient-140-128-light.png',
            light: '@six-tech/starlight-theme-six/assets/six-logo-mini-gradient-140-128-light.png',
            alt: 'Six Theme for Astro.js Starlight',
          }
        }

        // Default title (only if user hasn't provided one)
        if (starlightConfig.title === undefined || starlightConfig.title === 'My Docs') {
          defaultConfig.title = 'Starlight Six'
        }

        // Note: Favicon defaults are not automatically applied to avoid base path conflicts
        // Users should manually configure favicons using getFavIcons() utility if needed

        // Default lastUpdated (only if user hasn't set it)
        if (starlightConfig.lastUpdated === undefined) {
          defaultConfig.lastUpdated = true
        }

        // Default table of contents (only if user hasn't provided one)
        if (starlightConfig.tableOfContents === undefined) {
          defaultConfig.tableOfContents = {
            minHeadingLevel: 1,
            maxHeadingLevel: 5,
          }
        }

        updateConfig({
          ...defaultConfig,
          components: overrideComponents(
            starlightConfig,
            [
              'ThemeSelect',
              'PageFrame',
              'Header',
              'SiteTitle',
              'Sidebar',
              'TwoColumnContent',
              'ContentPanel',
              'PageTitle',
              'MarkdownContent',
              'Hero',
              'Footer',
              'SocialIcons',
              'Pagination',
              'Search',
              'TableOfContents',
              'PageSidebar',
            ],
            logger,
          ),
          customCss: [
            ...(starlightConfig.customCss ?? []),
            '@fontsource/jetbrains-mono/100.css',
            '@fontsource/jetbrains-mono/200.css',
            '@fontsource/jetbrains-mono/300.css',
            '@fontsource/jetbrains-mono/400.css',
            '@fontsource/jetbrains-mono/500.css',
            '@fontsource/jetbrains-mono/600.css',
            '@fontsource/jetbrains-mono/700.css',
            '@fontsource/jetbrains-mono/800.css',
            '@fontsource/inter/100.css',
            '@fontsource/inter/200.css',
            '@fontsource/inter/300.css',
            '@fontsource/inter/400.css',
            '@fontsource/inter/500.css',
            '@fontsource/inter/600.css',
            '@fontsource/inter/700.css',
            '@fontsource/inter/800.css',
            '@fontsource/inter/900.css',
            '@six-tech/starlight-theme-six/styles/layers',
            '@six-tech/starlight-theme-six/styles/theme',
            '@six-tech/starlight-theme-six/styles/base',
          ],
          expressiveCode:
            starlightConfig.expressiveCode === false
              ? false
              : {
                  themes: ['github-dark-default', 'github-light-default'],
                  ...userExpressiveCodeConfig,
                  styleOverrides: {
                    codeBackground: 'var(--code-background)',
                    borderWidth: '0px',
                    borderRadius: 'calc(var(--radius) + 4px)',
                    gutterBorderWidth: '0px',
                    ...userExpressiveCodeConfig?.styleOverrides,
                    frames: {
                      editorBackground: 'var(--code-background)',
                      terminalBackground: 'var(--code-background)',
                      copyIcon: createInlineSvgUrl(`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path></svg>`),
                      ...userExpressiveCodeConfig?.styleOverrides?.frames,
                    },
                    textMarkers: {
                      markBackground: 'var(--mark-background)',
                      markBorderColor: 'var(--border)',
                      ...userExpressiveCodeConfig?.styleOverrides?.textMarkers,
                    },
                  },
                },
        })

        addIntegration({
          name: 'starlight-theme-six-integration',
          hooks: {
            'astro:config:setup': ({ updateConfig }) => {
              updateConfig({ vite: { plugins: [vitePluginStarlightThemeSix(config)] } })
            },
          },
        })
      },
      'i18n:setup': function ({ injectTranslations }) {
        injectTranslations(translations)
      },
    },
  }
}
