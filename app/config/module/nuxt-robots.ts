import type { ModuleOptions } from '@nuxtjs/robots'

// PS: if dev should visit /robots.txt?mockProductionEnv
export const robotsConf: Partial<ModuleOptions> = {
  enabled: true,
  robotsTxt: true,
  credits: false,
  // allow: ['*'],
  cacheControl: 'max-age=3600',
  sitemap: ['/sitemap_index.xml'],
  groups: [
    { userAgent: '*', allow: '*' }
  ],
}
