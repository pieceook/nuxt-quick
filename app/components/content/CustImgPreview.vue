<script setup lang="ts">
defineProps(['imgSrc'])
</script>

<template>
  <ElImage
    class="cust-img-preview"
    :src="imgSrc"
    :zoom-rate="1.2"
    :max-scale="7"
    :min-scale="0.2"
    :preview-src-list="[imgSrc]"
    :initial-index="0"
    fit="cover"
    lazy>
    <template #placeholder>
      <div class="icon-loading i-eos-icons:three-dots-loading" />
    </template>
  </ElImage>
</template>

<style lang="scss" scoped>
.cust-img-preview {
  @apply sm:w-80%;

  // PS: fix el-image placeholder
  :deep(.el-image__wrapper) {
    @apply relative;

    .icon-loading {
      @apply h-[40px] w-[40px] text-style;
    }
  }
}
</style>
