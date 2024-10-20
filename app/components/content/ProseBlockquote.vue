<template>
  <blockquote>
    <slot />
  </blockquote>
</template>

<style lang="scss" scoped>
blockquote {
  @apply b-l-[3px] b-[var(--el-border-color)] !p-l-[10px] b-solid text-style2;
}
</style>
