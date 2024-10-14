import { resolve } from 'node:path'
import process from 'node:process'
import ElementPlus from 'unplugin-element-plus/vite'

const { GOOGLE_GTAG_ID, GOOGLE_ADSENSE_ID, YANDEX_METRIKA_ID, NODE_ENV = '' } = process.env
const ssr: boolean = process.env.ssr !== 'false'
const isDev = ['development', 'local'].includes(NODE_ENV)
const isProd = ['production'].includes(NODE_ENV)
console.warn('##CONF##\n', JSON.stringify({ ssr, NODE_ENV, GOOGLE_GTAG_ID, GOOGLE_ADSENSE_ID, YANDEX_METRIKA_ID }, null, 2))

export default defineNuxtConfig({
  ssr,
  app: {
    head: {
      title: 'NuxtQuick',
      link: [
        { rel: 'prefetch', as: 'image', href: '/images/icon-site-logo-text.light.svg' },
        { rel: 'prefetch', as: 'image', href: '/images/icon-site-logo-text.dark.svg' },
      ],
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
    }
  },
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-07-03',
  runtimeConfig: {
    PRV_TEST_KEY: 'todo-key-server',
    public: {
      YANDEX_METRIKA_ID
    }
  },
  build: {
    transpile: ['vue-i18n']
  },
  telemetry: false,
  typescript: {
    typeCheck: true
  },
  vite: {
    build: {
      cssCodeSplit: true
    },
    plugins: [
      ElementPlus({
        useSource: true
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          // PS: $CDN_URL is empty by default. If you need to configure the CDN URL, you can fill it in.
          additionalData: `
            @use "@/assets/element-plus/override.scss" as element;
            @use "@/assets/mixin.scss" as *;
            $CDN_URL: ${isProd ? '""' : '""'};
          `
        }
      }
    }
  },
  devServer: {
    port: 3998
  },
  modules: [
    '@nuxt/eslint',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@element-plus/nuxt',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/google-adsense',
    '@pinia/nuxt',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    'nuxt-gtag'
  ],
  googleAdsense: {
    onPageLoad: true,
    id: GOOGLE_ADSENSE_ID
  },
  gtag: {
    id: GOOGLE_GTAG_ID,
    config: {
      send_page_view: true
    }
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nquick-color-mode-script',
    globalName: 'nquick-color-mode',
    componentName: 'ColorMode',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nquick-color-mode',
  },
  elementPlus: {
    importStyle: 'scss'
  },
  stylelint: {
    lintOnStart: false,
    chokidar: true,
    failOnError: isDev,
    failOnWarning: isDev,
    fix: true,
    exclude: ['node_modules/', '.nuxt/', 'output/']
  },
  eslint: {
    config: {
      standalone: false
    },
    checker: true
  },
  content: {
    locales: ['en', 'zh-Hans', 'zh-Hant'],
    defaultLocale: 'en',
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
        base: resolve(__dirname, 'app/content'),
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
  },
  i18n: {
    detectBrowserLanguage: {
      fallbackLocale: 'en',
      useCookie: true,
      cookieKey: 'nquick-i18n-redirected',
      cookieCrossOrigin: true,
      alwaysRedirect: true,
      // PS: better SEO and recommended root
      // 'all' | 'root' | 'no prefix'
      redirectOn: 'root'
    },
    vueI18n: './app/i18n.config.ts',
    langDir: 'lang',
    // types: 'composition',
    strategy: 'prefix_and_default',
    defaultLocale: 'en',
    lazy: true,
    locales: [
      {
        code: 'en',
        file: 'en',
        htmlLangAttr: 'en',
        name: 'English'
      },
      {
        code: 'zh-Hans',
        file: 'zh-Hans',
        htmlLangAttr: 'zh',
        name: '简体中文'
      },
      {
        code: 'zh-Hant',
        file: 'zh-Hant',
        htmlLangAttr: 'zh',
        name: '繁體中文'
      }
    ]
  },
  css: ['@unocss/reset/tailwind.css', '@unocss/reset/normalize.css', '@/assets/color-mode.scss', '@/assets/global.scss'],
  devtools: {
    enabled: false
  }
})
