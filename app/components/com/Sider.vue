<script setup lang="ts">
import { useSiteStore } from '@/store/index'

const siteStore = useSiteStore()
</script>

<template>
  <aside class="com-sider top-[60px] lt-sm:top-[50px]" :class="{ 'is-collapsed': siteStore.isSiderCollapsed }">
    <slot name="asider-slot" />
  </aside>
</template>

<style lang="scss" scoped>
.com-sider {
  height: 100%;
  position: fixed;
  right: 0;
  z-index: 2;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 0.4s;
    will-change: transform;
  }

  &.is-collapsed {
    transform: translateX(100%);
  }
}
</style>
