<template>
  <div class="prose-code-inline"><slot /></div>
</template>

<style lang="scss" scoped>
  .prose-code-inline {
    @apply inline-block border b-#e2e8f0 rd-[6px] p-x-[6px] p-y-[1px] font-400 line-height-initial dark:b-[#2d3137] dark:color-#b2b6c0;
  }
</style>
