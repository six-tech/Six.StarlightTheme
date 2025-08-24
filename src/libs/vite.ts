import type { ViteUserConfig } from 'astro'
import type { StarlightThemeSixConfig } from './config'

export function vitePluginStarlightThemeSix(config: StarlightThemeSixConfig): VitePlugin {
  const moduleId = 'virtual:starlight-theme-six-config'
  const resolvedModuleId = `\0${moduleId}`
  const moduleContent = `export default ${JSON.stringify(config)}`

  return {
    name: 'vite-plugin-starlight-theme-six',
    load(id) {
      return id === resolvedModuleId ? moduleContent : undefined
    },
    resolveId(id) {
      return id === moduleId ? resolvedModuleId : undefined
    },
  }
}

type VitePlugin = NonNullable<ViteUserConfig['plugins']>[number]
