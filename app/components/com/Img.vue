<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    svgId?: string
    svgSize?: string
    svgStyle?: string
    iconClass?: string
  }>(),
  {
    svgSize: '23px',
    svgStyle: '',
    iconClass: ''
  }
)
</script>

<template>
  <svg v-if="svgId" class="img-svg" aria-hidden="true">
    <use :xlink:href="props.svgId" />
  </svg>
  <div v-else class="img-icon" :class="props.iconClass" />
</template>

<style lang="scss" scoped>
// .img-svg {
//   width: v-bind('$props.svgSize');
//   height: v-bind('$props.svgSize');
// }
</style>
