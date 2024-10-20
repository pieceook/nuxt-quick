import type { ModuleOptions } from '@nuxtjs/sitemap'

export const sitemapConf: Partial<ModuleOptions> = {
  enabled: true,
  // sitemapName: 'sitemap.xml',
  sitemapsPathPrefix: '/__sitemap__/',
  strictNuxtContentPaths: true,
  cacheMaxAgeSeconds: 3600,
  autoI18n: true,
  autoLastmod: true,
  sources: [
    '/api/sitemap/urls',
  ],
  defaults: {
    changefreq: 'daily',
    priority: 1,
    lastmod: new Date()
  },
  xsl: false,
  // xslColumns: [
  //   { label: 'URL', width: '50%' },
  //   { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
  //   { label: 'Priority', select: 'sitemap:priority', width: '12.5%' },
  //   { label: 'Change Frequency', select: 'sitemap:changefreq', width: '12.5%' },
  // ],
  // xslTips: false,
  // minify: true,
}
