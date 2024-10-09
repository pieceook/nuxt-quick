<script setup lang="ts">
defineProps(['href'])

const localePath = useLocalePath()
</script>

<template>
  <ElLink :href="localePath(href)" target="_blank" class="!font-size-[18px] !fw-400">
    <slot />
  </ElLink>
</template>
