<script setup lang="ts">
const { locale, t } = useI18n()

const updateSeoFn = () => {
  const desc = `${t('tdk.Title')} - ${t('tdk.Description')}`
  useSeoMeta({
    robots: 'index, follow',
    titleTemplate: (title: string | undefined) => {
      return title || 'NuxtQuick'
    },
    description: desc,
    ogDescription: desc,
    twitterDescription: desc
  })
}

updateSeoFn()

watch(locale, () => {
  updateSeoFn()
})
</script>

<template>
  <div class="def-layout">
    <ComHeader />
    <div class="slot-wrap">
      <slot />
    </div>
    <ComFooter />
    <ComSvgs />
    <ComGoTop />
  </div>
</template>

<style lang="scss">
html,
body,
#__nuxt {
  height: 100%;
}

.def-layout {
  height: fit-content;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.slot-wrap {
  width: 100%;
  flex: 1 0 auto;
  margin-top: 10px;
  overflow-wrap: break-word;
  padding-bottom: 40px;
}

footer {
  width: 100%;
  flex: 0 0 auto;
}
</style>
