// @ts-nocheck
// TODO: same issue https://github.com/nuxt/nuxt/issues/29263

import type { QueryBuilderParams } from '@nuxt/content'
import { serverQueryContent } from '#content/server'
import { asSitemapUrl, defineSitemapEventHandler } from '#imports'
import { DEF_LOCALE_ARTICLE, I18N_LOCALES } from '@/utils/constants'

export default defineSitemapEventHandler(async (event) => {
  const query: QueryBuilderParams = { sort: [{ date: -1 }], only: ['title', 'content-key', '_path', 'date'] }
  const docs = await serverQueryContent(event, query).locale(DEF_LOCALE_ARTICLE).find()
  // const docs = await serverQueryContent(event, query).find()

  const docsWithI18n = I18N_LOCALES
    .map(item => docs.map((docItem) => {
      return {
        _path: item.code === 'en' ? `/article${docItem._path}` : `/${item.code}/article${docItem._path}`
      }
    }))
    .flat(Infinity)

  return docsWithI18n.map(item => asSitemapUrl({
    loc: item._path,
    lastmod: item.updatedAt || new Date(),
    changefreq: 'daily'
  }))
})
