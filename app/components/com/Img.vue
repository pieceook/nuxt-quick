<script setup lang="ts">
interface ImgProps {
  svgId?: string
  svgSize?: string
  svgStyle?: string
  iconClass?: string
}
// const props = withDefaults(
//   defineProps<ImgProps>(),
//   {
//     svgSize: '23px',
//     svgStyle: '',
//     iconClass: ''
//   }
// )
const { svgId, svgSize = '23px', iconClass = '' } = defineProps<ImgProps>()
</script>

<template>
  <svg v-if="svgId" class="img-svg" aria-hidden="true">
    <use :xlink:href="svgId" />
  </svg>
  <div v-else class="img-icon" :class="iconClass" />
</template>

<style lang="scss" scoped>
.img-svg {
  width: v-bind('svgSize');
  height: v-bind('svgSize');
}
</style>
