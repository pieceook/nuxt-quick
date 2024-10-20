<script setup lang="ts">
useScroller('.guide-comp-child')
</script>

<template>
  <div class="fixed top-[90px] h-full max-h-[calc(100%-180px)] max-w-[240px] w-[240px] flex flex-col overflow-x-hidden overflow-y-scroll">
    <Toc data-allow-mismatch class="toc-comp-child max-h-[45vh] shadow-md" />
    <Guide class="guide-comp-child mt-[15px] max-h-[55vh] overflow-x-hidden overflow-y-scroll" />
  </div>
</template>

<style lang="scss" scoped>
.guide-comp-child {
  @include scrollbar-style;

  :deep(.sub-item) {
    .sub-item-top {
      @apply rd-t-[6px] pos-sticky top-[0] z-1 m-0 pa-0 bg-[#fafafa] py-5px pl-15px dark:bg-#242424f5 font-size-[18px] lh-normal;
    }

    .sub-item-bottom {
      @apply grid-cols-none m-auto flex flex-col gap-8px;

      .el-button {
        @apply min-h-50px;

        // PS: weight > unocss
        padding: 10px !important;

        .btn-content {
          .btn-top {
            p {
              @apply my-[5px];
            }
          }
        }
      }
    }
  }
}
</style>
