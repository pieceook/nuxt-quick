import type { NuxtI18nOptions } from '@nuxtjs/i18n'
import { DEF_LOCALE, I18N_LOCALES } from '../../utils/constants'

export const i18nConf: NuxtI18nOptions = {
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
  vueI18n: './app/config/module/vue-i18n.ts',
  langDir: 'lang',
  // types: 'composition',
  strategy: 'prefix_and_default',
  defaultLocale: DEF_LOCALE,
  lazy: true,
  locales: I18N_LOCALES,
}
