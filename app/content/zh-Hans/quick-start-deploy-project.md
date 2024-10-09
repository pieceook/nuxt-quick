---
content-key: quick-start-deploy-project
title: 快速开始 - 部署项目
date: 2024-09-20T00:00:00Z
duration: 8min
tags:
  - QuickStart
head:
  meta:
    - name: keywords
      content: NuxtQuick,QuickStart,Deploy Project
    - name: description
      content: QuickStart - Deploy project
---

## 一、自主部署 {#self-hosting}

#### 1. 编译项目

- 1.1 配置 ./.env.production 文件，例如 GTAG_ID
- 1.2 打包项目

```bash
$ yarn build:prod # 编译产物为 .output
```

#### 2. 安装PM2（进程管理工具）

```bash
# 安装NVM
  # Linux
  $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
  $ nvm install v20.12.2 # 新开终端窗口再执行
  $ nvm use v20.12.2

  # MacOS
  $ brew install nvm
  $ nvm install v20.12.2
  $ nvm use v20.12.2

# 安装 PM2
$ npm install -g pm2 \
&& pm2 install pm2-logrotate \
&& pm2 conf pm2-logrotate \
&& pm2 set pm2-logrotate:max_size 50M \
&& pm2 set pm2-logrotate:retain 14 \
&& pm2 save \
&& pm2 startup
```

#### 3. 配置PM2文件

```js
// 详见 ./ecosystem.config.cjs

module.exports = {
  apps: [
    {
      name: "nuxt-quick",
      port: "3998",
      exec_mode: "cluster",
      instances: "1",
      script: "./.output/server/index.mjs",
    },
  ],
};
```

#### 4. 启动项目

```bash
$ pm2 start ecosystem.config.cjs
```

## 二、Cloudflare Pages {#cloudflare-pages}

- 官方文档：[deploy-a-nuxt-site](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nuxt-site/#create-a-pages-project){target=\_blank}

### 部署流程（SSR）

#### 1. 打开CF Workers & Pages 页

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

#### 4. 等待编译上传

::cust-img-preview{imgSrc="/images/content/quick-start-deploy-blog/0x04.png"}
::

#### 5. 完成部署

- 其中 {ProjectName}.pages.dev为CF提供的访问域名
- 自定义域名，详见 “Custom domains”，稍微操作下dns即可
  ::cust-img-preview{imgSrc="/images/content/quick-start-deploy-blog/0x05.png"}
  ::

### SSG和SSR配置差异

- SSG配置

| Configuration option | Value            |
| -------------------- | ---------------- |
| Production branch    | main             |
| Build command        | npm run generate |
| Build directory      | dist             |

- SSR配置

| Configuration option | Value              |
| -------------------- | ------------------ |
| Production branch    | main               |
| Build command        | npm run build:prod |
| Build directory      | dist               |

## 三、GitHub Pages {#github-pages}

- 官方文档：[creating-a-github-pages-site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site){target=\_blank}
- 具体步骤：
  Comming soon!

## 四、项目版本管理 {#github-release}

- 自动化管理项目版本，当项目提交新的 tag 时，GitHub会根据以下 action 文件，自动生成 changelog，并执行 release 的发版
- 配置文件

```yml
# 详见 .github/workflows/release-please.yml

name: Create Release

permissions:
  contents: write
  pull-requests: write

on:
  push:
    tags:
      - v*

jobs:
  release-please:
    runs-on: ubuntu-latest
    steps:
      - name: ->actions/checkout@v4
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: ->actions/setup-node@v4
        uses: actions/setup-node@v4
        with:
          node-version: lts/*
          cache: npm

      - run: npm install

      - name: ->npx changelogithub
        run: npx changelogithub
        continue-on-error: true
        env:
          GITHUB_TOKEN: ${{secrets.RELEASE_TOKEN}}

      - name: ->googleapis/release-please-action@v4
        uses: googleapis/release-please-action@v4
        with:
          token: ${{ secrets.RELEASE_TOKEN }}
          release-type: node
      # - run: npm ci
      #   if: ${{ steps.release.outputs.release_created }}
      # - run: npm publish
      #   env:
      #     NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
      #   if: ${{ steps.release.outputs.release_created }}
```
