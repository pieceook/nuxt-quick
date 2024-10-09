<script setup lang="ts">
import { useSiteStore } from '@/store/index'

const { t } = useI18n()

const localePath = useLocalePath()

const siteStore = useSiteStore()

const menuArr = [
  { text: computed(() => t('site.Home')), path: localePath('/'), iconClass: 'i-codicon:home w-[24px] h-[24px]' },
  // { text: computed(() => t('site.Blog')), path: localePath('/'), iconClass: 'i-heroicons:book-open w-[24px] h-[24px]' },
  { text: 'Github', href: GITHUB_URL, iconClass: 'i-iconoir:github w-[24px] h-[24px]' },
]
</script>

<template>
  <header class="sticky top-0 z-1 h-[60px] w-full bg-[var(--color-fff-222)] shadow-md lt-sm:h-[50px]">
    <div class="h-full flex justify-between def-media">
      <div class="w-full flex">
        <NuxtLink :to="localePath('/')" class="flex items-center justify-center">
          <div class="h-[34px] w-[174px] bg-style-[var(--site-logo-text-bg)] lt-sm:h-[32px] lt-sm:w-[154px]" />
        </NuxtLink>
      </div>
      <div class="overflow-hidden text-ellipsis px-2" />
      <div class="flex flex-row items-center">
        <ComColorMode class="mr-[10px]" />
        <ComLocale class="lt-sm:mr-[10px]" />
        <el-link :href="GITHUB_URL" target="_blank" class="i-iconoir:github ml-10px h-[24px] w-[24px] lt-sm:!hidden" />
        <div class="i-line-md:menu-fold-left h-[28px] w-[28px] transition-transform duration-400ms sm:hidden text-style" :class="{ 'transform-rotate-180': !siteStore.isSiderCollapsed }" @click="siteStore.toggleSiderCollapse()" />
      </div>
    </div>
    <ClientOnly>
      <Teleport to=".def-layout">
        <ComSider>
          <template #asider-slot>
            <div class="position-relative h-full w-[100vw] backdrop-blur-lg sm:hidden" @click="siteStore.toggleSiderCollapse()">
              <div class="m-x-[10px] flex flex-col items-center justify-center pt-[100px]">
                <div v-for="(item, index) in menuArr" :key="index" class="mb-[10px] flex items-center">
                  <ElLink v-if="item.href" :href="item.href" target="_blank" class="!font-size-[22px] !fw-normal">{{ item.text }}</ElLink>
                  <NuxtLink v-else class="p-[16px] p-0 font-size-[22px] text-style" :to="item.path">
                    {{ item.text }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </template>
        </ComSider>
      </Teleport>
    </ClientOnly>
  </header>
</template>
