<script setup lang="ts">
defineProps(['imgSrc'])
</script>

<template>
  <img :src="imgSrc" class="lt-sm:w-100vw sm:w-450px" loading="lazy">
</template>
