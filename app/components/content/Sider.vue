<script setup lang="ts">
useScroller('.guide-comp')
</script>

<template>
  <div class="fixed top-[90px] h-full max-h-[calc(100%-180px)] max-w-[240px] w-[240px] flex flex-col overflow-x-hidden overflow-y-scroll">
    <Toc data-allow-mismatch class="toc-comp max-h-[40vh]" />
  </div>
</template>
