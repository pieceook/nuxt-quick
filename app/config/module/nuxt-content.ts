import type { ModuleOptions } from '@nuxt/content'
import { resolve } from 'node:path'
import { DEF_LOCALE, I18N_LOCALES } from '../../utils/constants'

const locales = I18N_LOCALES.map(item => item.code)

export const contentConf: Partial<ModuleOptions> = {
  locales,
  defaultLocale: DEF_LOCALE,
  // Ref: https://content.nuxt.com/document-driven/introduction
  // PS: documentDriven if true, will...
  // 1. WARN Using <NuxtLayout> inside app.vue will cause unwante...
  // 2. [nuxt] Calling `useRoute` within middleware may lead...
  // documentDriven: true,
  experimental: {
    clientDB: true,
  },
  sources: {
    content: {
      driver: 'fs',
      // prefix: '/docs',
      base: resolve(__dirname, '../../content'),
      watch: {
        ws: {
          port: 4000,
          showURL: true
        }
      }
    },
  },
  highlight: {
    // Ref: https://github.com/shikijs/textmate-grammars-themes/tree/main/packages/tm-themes
    theme: {
      // dark: 'github-dark',
      // default: 'github-light',
      dark: 'material-theme-darker',
      default: 'material-theme-lighter'
    },
    langs: ['js', 'jsx', 'json', 'ts', 'tsx', 'vue', 'css', 'html', 'vue', 'bash', 'md', 'mdc', 'yaml', 'go']
  },
  markdown: {
    anchorLinks: false,
    toc: {
      depth: 4,
      searchDepth: 4
    },
    remarkPlugins: ['remark-heading-id'],
    rehypePlugins: [
      'rehype-slug',
      [
        'rehype-autolink-headings',
        {
          content: { type: 'text', value: '#' },
          behavior: 'prepend',
          properties: {
            class: 'header-anchor',
          }
        },
      ],
    ],
  }
}
