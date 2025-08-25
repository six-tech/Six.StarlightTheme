import { docsLoader } from '@astrojs/starlight/loaders'
import { docsSchema } from '@astrojs/starlight/schema'
import { ExtendDocsSchema } from '@six-tech/starlight-theme-six/schema'
import { defineCollection } from 'astro:content'

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: ExtendDocsSchema,
    }),
  }),
}
