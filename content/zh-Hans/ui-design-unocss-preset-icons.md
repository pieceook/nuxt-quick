---
content-key: ui-design-unocss-preset-icons
title: 优雅的图标集成方案：UnoCSS preset-icons
date: 2024-09-20T00:00:00Z
duration: 8min
tags:
  - QuickStart
head:
  meta:
    - name: description
      content: 优雅的图标集成方案：UnoCSS preset-icons | NuxtQuick | pieceook
---

### 优势 {#best-practice-good}

- 支持尺寸、颜色等动态修改
- 大量图标支持：[icon-sets.iconify.design](https://icon-sets.iconify.design/){target=\_blank}
- 按需/灵活使用

### 配置 {#best-practice-conf}

- `package.json`

```bash
$ pnpm install @unocss/nuxt @unocss/reset
$ pnpm install @iconify/json -D
```

- `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["@unocss/nuxt"],
});
```

- `uno.config.ts`

```js
import { presetIcons, defineConfig } from "@unocss";

export default defineConfig({
  presets: [
    presetIcons({
      /* 选项 */
    }),
    // ...其他预设
  ],
});
```

### 使用 {#best-practice-use}

- xxx.vue

```vue
<template>
  <div class="i-hugeicons:moon-landing w-[24px] h-[24px] mr-[10px] font-600" />
</template>
```

### 参考 {#best-practice-ref}

- [UnoCSS · 图标预设](https://unocss.net/presets/icons){target=\_blank}
- [antfu · 聊聊纯 CSS 图标](https://antfu.me/posts/icons-in-pure-css-zh){target=\_blank}

---
