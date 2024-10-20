<script lang="ts" setup>
// const { toc } = defineProps<{
//   toc: ArticleToc
// }>()
const toc: ArticleToc | undefined = inject('article-toc')

const { t } = useI18n()

const removeHashFromText = (links: TocLink[]) => {
  if (!links?.length)
    return links
  links.forEach((link) => {
    if (link.text) {
      link.text = link.text.replace(/#/g, '')
      if (link.children) {
        removeHashFromText(link.children)
      }
    }
  })
}

if (toc) {
  removeHashFromText(toc.links)
}
</script>

<template>
  <div class="toc-wrap overflow-scroll rd-[6px] bg-[#fafafa] pb-[10px] pl-[15px] dark:bg-#242424ed">
    <div class="pos-sticky top-[0] mb-[4px] mt-0 flex items-center bg-[#fafafa] pb-[6px] pt-[10px] font-size-[18px] dark:bg-#242424f5">
      <div class="i-ep:guide h-[21px] w-[21px]" />
      {{ t('site.TableOfContents') }}
    </div>
    <template v-if="toc">
      <div v-for="(item, key) in toc.links" :key="key">
        <a :href="`#${item.id}`" class="max-w-[180px] w-[180px] font-size-[15px]">{{ item.text }}</a>
        <div v-if="item.children && item.children[0]?.text" class="pl-[15px]">
          <div v-for="(chilItem, key2) in item.children" :key="key2">
            <a :href="`#${chilItem.id}`" class="max-w-[165px] w-[165px] font-size-[14px]">{{ chilItem.text }}</a>
            <div v-if="chilItem.children" class="pl-[15px]">
              <div v-for="(chil3Item, key3) in chilItem.children" :key="key3">
                <a :href="`#${chil3Item.id}`" class="max-w-[150px] w-[150px] font-size-[13px]">{{ chil3Item.text }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
a {
  @apply b-none pb-[4px] color-[var(--el-text-color-regular)] flow-root truncate hover:border-b-hidden;

  &:hover {
    color: var(--el-color-primary);
  }
}

.toc-wrap {
  @include scrollbar-style;
}
</style>
