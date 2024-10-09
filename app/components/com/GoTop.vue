<script setup lang="ts">
const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const { y: scrollY } = useWindowScroll()
</script>

<template>
  <button
    data-allow-mismatch
    class="fixed bottom-3 right-3 z-100 h-[42px] w-[42px] flex items-center justify-center rounded-full transition duration-300 print:hidden hover-bg-hex-8883 lt-sm:bg-hex-8883 text-style hover:op100"
    :class="scrollY > 300 ? 'op80' : 'op0! pointer-events-none'"
    @click="goToTop()"
  >
    <div class="i-icon-park-outline:to-top h-[26px] w-[26px]" />
  </button>
</template>
