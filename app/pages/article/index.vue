<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content'

const localePath = useLocalePath()
const { t } = useI18n()

// TODO: multi code
// const query: QueryBuilderParams = { sort: [{ date: -1 }], locale: localeProperties.value.code }
const query: QueryBuilderParams = { sort: [{ date: -1 }], locale: DEF_LOCALE_ARTICLE, only: ['title', 'content-key', '_path', 'date'] }
</script>

<template>
  <main>
    <div class="def-media">
      <ContentList :query="query">
        <template #default="{ list }">
          <div v-for="item in list" :key="item._path" class="m-y-[10px] flex items-center lt-sm:flex-col lt-sm:items-start">
            <NuxtLink :to="localePath(`/article${item._path}`)" class="flex flex-col border-b border-b-transparent font-size-[18px] hover:border-b hover:border-b-[var(--un-prose-links)] hover:border-b-solid text-style">
              {{ item.title }}
            </NuxtLink>
            <div class="font-size-[12px] sm:ml-10px text-style">
              <span>{{ formatDate(item?.date, 'YYYY-MM-DD') }}</span>
              <span v-if="item?.duration" class="ml-[4px]">· {{ item?.duration }}</span>
            </div>
          </div>
        </template>
        <template #not-found>
          <p>{{ t('site.NoData') }}.</p>
        </template>
      </ContentList>
    </div>
  </main>
</template>
