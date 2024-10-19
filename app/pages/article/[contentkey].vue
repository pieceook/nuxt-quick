<script setup lang="ts">
import { CustImg, CustImgPreview, CustLink } from '#components'

definePageMeta({
  key: route => route.path
})
const route = useRoute()
const { t, locale: { value: localeVal }, localeProperties } = useI18n()
const getPageData = async (localeVal: string) => {
  const { data } = await useAsyncData('page-data', () => queryContent()
    .locale(localeVal)
    .where({ 'content-key': { $eq: route.params.contentkey as string }
    })
    .findOne())
  return data
}
let pageData = await getPageData(localeVal)
const needTranslate = useState(useId(), () => false)

if (!pageData.value) {
  pageData = await getPageData(DEF_LOCALE_ARTICLE)
  needTranslate.value = true
}

const article = pageData.value

if (article) {
  useContentHead(article)
}

const defaultToc: ArticleToc = {
  title: '',
  searchDepth: 2,
  depth: 2,
  links: []
}
const articleToc: ArticleToc = article?.body?.toc ?? defaultToc
provide('article-toc', articleToc)

if (!article) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <main class="max-w-none prose dark:prose-invert">
    <div class="article-wrap flex def-media">
      <div class="w-[calc(100%-250px)] lt-md:w-full">
        <div class="mb-[30px]">
          <h1>{{ article?.title }}</h1>
          <div class="color-[var(--el-text-color-regular)]">
            <span>{{ formatDate(article?.date, 'YYYY-MM-DD') }}</span>
            <span v-if="article?.duration" class="ml-[4px]">· {{ article?.duration }}</span>
          </div>
          <ClientOnly>
            <ElLink v-if="needTranslate" class="no-border-style" :href="GITHUB_URL" target="_blank">
              <ElTag type="warning">
                {{ t('site.needTranslate', { x: localeProperties.code }) }}
              </ElTag>
            </ElLink>
          </ClientOnly>
        </div>
        <ContentRenderer :value="article" :components="{ CustImg, CustLink, CustImgPreview }">
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </div>
      <div class="ml-10px lt-md:hidden">
        <Sider />
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.article-wrap {
  // PS: avoid @unocss/reset/tailwind.css override the @nuxt/content md style
  h1, h2, h3, h4, h5, h6 {
    margin-top: -60px;
    padding-top: 70px;
    font-size: revert !important;
    font-weight: revert !important;

    a {
      font-weight: 500 !important;
    }
  }

  blockquote {
    font-style: normal;
    padding-left: 0;
  }

  pre {
    background: #fafafa;

    @apply dark:bg-#242424ed;
  }

  li ul,
  li ol {
    margin: 4px 0;
  }

  thead,
  tbody {
    border: 1px solid var(--el-border-color);
  }

  a.header-anchor {
    @apply ml-[-1.2em] pr-[0.5em] no-underline b-none opacity-0 font-bold lt-lg:hidden;
  }

  a.header-anchor:hover,
  a.header-anchor:focus {
    text-decoration: none;
  }

  @for $i from 1 through 6 {
    h#{$i}:hover .header-anchor,
    h#{$i}:focus .header-anchor {
      @apply opacity-50;
    }
  }
}
</style>
