---
content-key: quick-start-deploy-project
title: 快速开始 - 部署项目
date: 2024-09-20T00:00:00Z
duration: 8min
tags:
  - QuickStart
head:
  meta:
    - name: description
      content: 快速开始 - 部署项目 | NuxtQuick | pieceook
---

## 方式一：自主部署 {#self-hosting}

#### 1. 安装 PM2 {#install-pm2}

```bash
# 1.1 安装 NVM
  # Linux系统
  $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
  $ nvm install v20.12.2 # 新开终端窗口再执行
  $ nvm use v20.12.2

  # MacOS系统
  $ brew install nvm
  $ nvm install v20.12.2
  $ nvm use v20.12.2

# 1.2 安装 PM2
$ npm install -g pm2 \
&& pm2 install pm2-logrotate \
&& pm2 conf pm2-logrotate \
&& pm2 set pm2-logrotate:max_size 50M \
&& pm2 set pm2-logrotate:retain 14 \
&& pm2 save \
&& pm2 startup
```

#### 2. 配置 PM2 文件 {#conf-pm2}

- 详见 `./ecosystem.config.cjs`

```js
const process = require("node:process");
const NODE_ENV = process.argv.includes("--env")
  ? process.argv[process.argv.indexOf("--env") + 1]
  : "development";

module.exports = {
  apps: [
    {
      name: `nuxt-quick-${NODE_ENV}`,
      exec_mode: "cluster",
      instances: 1,
      max_memory_restart: "500M",
      merge_logs: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      error_file: "./logs/error.log",
      out_file: "./logs/access.log",
      script: "./.output/server/index.mjs",
      env: {
        NODE_ENV: "development",
        PORT: "13998",
      },
      env_production: {
        NODE_ENV: "production",
        PORT: "3998",
      },
    },
  ],
};
```

#### 3. 编译项目 {#build-project}

- 1.1 配置编译时的环境变量 `./app/config/env/.env.production` 文件

```bash
GOOGLE_GTAG_ID=xxxx
GOOGLE_ADSENSE_ID=xxxx
YANDEX_METRIKA_ID=xxxx

...
```

- 1.2 打包项目

```bash
$ npm run build:production # 编译产物为 .output
```

#### 4. 启动项目 {#start-project}

```bash
$ pm2 start ecosystem.config.cjs --env production
```

## 方式二：Cloudflare Pages {#cloudflare-pages}

- 官方文档：[deploy-a-nuxt-site](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nuxt-site/#create-a-pages-project){target=\_blank}

### SSG和SSR平台配置差异 {#cloudflare-pages-ssg-ssr-dif}

- SSG配置

| Configuration option | Value            |
| -------------------- | ---------------- |
| Production branch    | main             |
| Build command        | npm run generate |
| Build directory      | dist             |

- SSR配置

| Configuration option | Value                             |
| -------------------- | --------------------------------- |
| Production branch    | main                              |
| Build command        | npm run build:production          |
| Build directory      | dist (平台配置为dist，非 .output) |

### 部署流程（SSR） {#cloudflare-pages-ssr}

#### 1. 打开 CF Workers & Pages 页 {#cloudflare-pages-step-1}

::cust-img-preview{imgSrc="/images/content/quick-start-deploy-blog/0x01.png"}
::

#### 2. 关联你的仓库 {#cloudflare-pages-step-2}

::cust-img-preview{imgSrc="/images/content/quick-start-deploy-blog/0x02.png"}
::

#### 3. 填入相关信息 {#cloudflare-pages-ssr-step-3}

- Project name：**取一个ProjectName（CF会提供一个免费的访问域名，子域名为该 ProjectName）**
- Production branch: **blog**
- Framework preset: **Nuxt.js**
- Build command: **npm run build:production**
- Build output directory: **dist**
  ::cust-img-preview{imgSrc="/images/content/quick-start-deploy-blog/0x03.png"}
  ::

#### 4. 等待编译上传 {#cloudflare-pages-ssr-step-4}

::cust-img-preview{imgSrc="/images/content/quick-start-deploy-blog/0x04.png"}
::

#### 5. 完成部署 {#cloudflare-pages-ssr-step-5}

- 其中 `{ProjectName}.pages.dev` 为CF提供的访问域名
- 自定义域名，详见 “Custom domains”，稍微操作下dns即可
  ::cust-img-preview{imgSrc="/images/content/quick-start-deploy-blog/0x05.png"}
  ::

## 方式三：GitHub Pages {#github-pages}

- 官方文档：[creating-a-github-pages-site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site){target=\_blank}
- 具体步骤：
  Comming soon!
