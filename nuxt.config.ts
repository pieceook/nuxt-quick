import process from 'node:process'
import ElementPlus from 'unplugin-element-plus/vite'
import { colorModeConf, contentConf, eslintConf, i18nConf, robotsConf, sitemapConf, stylelintConf } from './app/config/module'

const { GOOGLE_GTAG_ID, GOOGLE_ADSENSE_ID, YANDEX_METRIKA_ID, NODE_ENV = '', NUXT_PUBLIC_SITE_URL } = process.env
const ssr: boolean = process.env.ssr !== 'false'
const isProd = ['production'].includes(NODE_ENV)
console.warn('##CONF##\n', JSON.stringify({ ssr, NODE_ENV, GOOGLE_GTAG_ID, GOOGLE_ADSENSE_ID, YANDEX_METRIKA_ID }, null, 2))

export default defineNuxtConfig({
  ssr,
  app: {
    head: {
      title: 'NuxtQuick',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-48x48.png', sizes: '48x48' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'prefetch', as: 'image', href: '/images/icon-site-logo-text.light.svg' },
        { rel: 'prefetch', as: 'image', href: '/images/icon-site-logo-text.dark.svg' },
      ],
      meta: [
        { name: 'apple-mobile-web-app-title', content: 'NuxtQuick' }
      ],
      viewport: 'width=device-width, initial-scale=1'
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
  // PS: ref https://nuxtseo.com/site-config/getting-started/background#site-config-examples
  site: {
    url: NUXT_PUBLIC_SITE_URL
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
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/google-adsense',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@element-plus/nuxt',
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-gtag'
  ],
  // TODO: check generate
  // routeRules: {
  //   '/': {
  //     prerender: true
  //   }
  // },
  // nitro: {
  //   prerender: {
  //     crawlLinks: true
  //   }
  // },
  i18n: i18nConf,
  colorMode: colorModeConf,
  content: contentConf,
  stylelint: stylelintConf,
  eslint: eslintConf,
  sitemap: sitemapConf,
  robots: robotsConf,
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
  elementPlus: {
    importStyle: 'scss'
  },
  css: ['@unocss/reset/tailwind.css', '@unocss/reset/normalize.css', '@/assets/color-mode.scss', '@/assets/global.scss'],
  devServer: {
    port: 3998
  },
  devtools: {
    enabled: false
  }
})
