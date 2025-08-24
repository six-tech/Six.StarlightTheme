import { z } from 'astro/zod'

export const ExtendDocsSchema = z.object({
  links: z.object({
    doc: z.string().optional(),
    api: z.string().optional(),
  }).optional(),
  // HeroX properties are handled by the component itself, not through frontmatter
  // Use the HeroX component directly in MDX files for full control
})
