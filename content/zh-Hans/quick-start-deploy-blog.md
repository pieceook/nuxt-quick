---
content-key: quick-start-deploy-blog
title: 快速开始 - 部署一个博客
date: 2024-09-20T00:00:00Z
duration: 8min
tags:
  - QuickStart
head:
  meta:
    - name: description
      content: QuickStart - Deploy Blog
---

## 一、下载项目

### 1. Fork/Clone项目

- 方式1: 推荐此方式，方便后续各种部署

  1. 先在GitHub Fork [nuxt-quick项目](https://github.com/pieceook/nuxt-quick){target=\_blank}
  2. 再下载项目

  ```bash
  $ git clone https://github.com/${这里替换成你的GitHub用户名}/nuxt-quick
  ```

- 方式2:

```bash
# 1. 直接下载项目
$ git clone https://github.com/pieceook/nuxt-quick
# 2. 再关联自己的远程GitHub仓库
```

### 2. 切换分支

```bash
$ cd nuxt-quick # 进入NuxtQuick项目根目录
$ git checkout blog # 切换至 blog 分支
```

## 二、部署

### Cloudflare Pages部署流程（SSR） {#cloudflare-pages-deploy}

#### 1. 打开CF Workers & Pages 页

<!-- ::cust-img{imgSrc="/images/content/quick-start-deploy-blog/0x01.png" style="width: 100%;"} -->

::cust-img-preview{imgSrc="/images/content/quick-start-deploy-blog/0x01.png"}
::

#### 2. 关联你的仓库

::cust-img-preview{imgSrc="/images/content/quick-start-deploy-blog/0x02.png"}
::

#### 3. 填入相关信息

- Project name：**取一个ProjectName（CF会提供一个免费的访问域名，子域名为该 ProjectName）**
- Production branch: **blog**
- Framework preset: **Nuxt.js**
- Build command: **npm run build:prod**
- Build output directory: **dist**
  ::cust-img-preview{imgSrc="/images/content/quick-start-deploy-blog/0x03.png"}
  ::

#### 4. 编译上传完成

::cust-img-preview{imgSrc="/images/content/quick-start-deploy-blog/0x04.png"}
::

#### 5. 完成部署

- 其中 {ProjectName}.pages.dev为CF提供的访问域名
- 自定义域名，详见 “Custom domains”，稍微操作下dns即可
  ::cust-img-preview{imgSrc="/images/content/quick-start-deploy-blog/0x05.png"}
  ::

### 更多部署方式

::cust-link{href="/article/quick-start-deploy-project"}
Link
::
