import { z } from 'astro/zod'

function sixI18nSchema(): z.ZodObject<{
  'six.home': z.ZodOptional<z.ZodString>
  'six.links.doc': z.ZodOptional<z.ZodString>
  'six.links.api': z.ZodOptional<z.ZodString>
}> {
  return z
    .object({
      'six.home': z
        .string()
        .describe('Text display in drawer'),
      'six.links.doc': z
        .string()
        .describe('Text display in links doc'),
      'six.links.api': z
        .string()
        .describe('Text display in links api'),

    })
    .partial()
}

// eslint-disable-next-line ts/explicit-function-return-type
export function builtinI18nSchema() {
  return sixI18nSchema()
    .required()
    .strict()
}
