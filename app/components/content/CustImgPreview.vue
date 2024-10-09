<script lang="ts" setup>
defineProps(['imgSrc'])
</script>

<template>
  <div class="demo-image__preview">
    <ElImage
      class="lt-sm:w-100vw sm:w-80%"
      :src="imgSrc"
      :zoom-rate="1.2"
      :max-scale="7"
      :min-scale="0.2"
      :preview-src-list="[imgSrc]"
      :initial-index="4"
      fit="cover"
      lazy
    />
  </div>
</template>
