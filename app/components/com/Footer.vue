<script setup lang="ts">
// const { t } = useI18n()
</script>

<template>
  <footer class="com-footer h-[80px] b-t-[1px] b-#6b728033 b-solid">
    <div class="h-inherit flex flex-wrap items-center justify-between def-media lt-sm:flex-col lt-sm:justify-center lt-sm:lh-[normal]">
      <ComSiteDesc />
      <div class="flex items-center font-size-[15px] lt-sm:mt-5px text-style">Powered by <ElLink :href="GITHUB_URL" target="_blank" class="ml-[5px]">NuxtQuick</ElLink>.</div>
    </div>
  </footer>
</template>
