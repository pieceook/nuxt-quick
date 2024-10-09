import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  // presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
    presetTypography({
      cssExtend: {
        'a': {
          'border-style': 'dashed',
          'text-decoration': 'none',
          'border-bottom-width': '1px',
          'font-weight': 400
        },
        'a:hover': {
          'border-style': 'double',
          'color': 'initial',
          'border-color': 'initial',
        },
        'li::marker': {
          color: '#d1d5db'
        },
        'h2': {
          margin: '1rem 0'
        }
      }
    }),
    // presetWebFonts(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    breakpoints: {
      'xs': '375px',
      'sm': '640px',
      'md': '750px',
      '2md': '960px',
      'lg': '1024px',
      '2lg': '1152px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    // typography: {}
  },
  shortcuts: [
    {
      'no-print': 'print:hidden',
      'text-style': 'text-[var(--el-text-color-regular)] hover:text-[var(--color-000-fff)]',
      'text-style2': 'text-[var(--el-color-info)] hover:text-[var(--color-000-fff)]',
      'no-border-style': '!b-none !hover:b-none !hover:after:b-none',
      'def-media': `
          max-w-full mx-auto px-8px
          xs:px-12px
          sm:px-12px
          md:px-16px
          2md:max-w-960px 2md:px-32px
          lg:max-w-1024px lg:px-48px
          2lg:max-w-1152px lg:px-64px
          xl:max-w-1280px xl:px-96px
          2xl:max-w-1536px 2xl:px-240px
        `,
    },
  ],
  rules: [
    ['print:hidden', { 'display': 'none', '@media': 'print' }],
    [
      /^bg-style-\[(.*)\]$/,
      ([_, d]) => {
        if (d) {
          return {
            'background': d,
            'background-size': 'contain',
            'background-repeat': 'no-repeat',
            'background-position': 'left'
          }
        }
        return {}
      }
    ],
  ]
})
