<template>
  <div class="com-site-desc">
    <div class="text-wrapper">
      <div class="text-list">
        <span class="text1">&lt;/&gt; Hello!</span>
        <span class="text2">Good day to you</span>
        <span class="text3">.</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.com-site-desc {
  width: fit-content;
  height: 18px;

  .text-wrapper {
    width: 0;
    position: relative;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    animation: reveal-text 3s steps(30, end) forwards;
  }

  .text-list {
    display: inline-block;
    color: var(--el-text-color-regular);
    font-size: 15px;
    font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace;
    font-weight: 600;
    white-space: nowrap;
    font-style: italic;
  }

  .text2 {
    margin-left: 6px;
    color: #ffaf1a;
  }
}

@keyframes reveal-text {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}
</style>
