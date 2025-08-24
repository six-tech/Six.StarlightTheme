import adrianub from '@adrianub/eslint-config'

export default adrianub({
  type: 'lib',
  formatters: true,
  astro: false,
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
})
