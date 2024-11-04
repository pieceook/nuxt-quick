---
content-key: quick-start-run-project
title: 快速开始 - 启动项目
date: 2024-09-20T00:00:00Z
duration: 8min
tags:
  - QuickStart
head:
  meta:
    - name: description
      content: 快速开始 - 启动项目 | NuxtQuick | pieceook
---

## 一、安装 Vscode & 插件 {#install-vscode-plugins}

#### Vscode

- [安装 Vscode](https://code.visualstudio.com/){target=\_blank}

#### Vscode插件

PS：详见项目下的 `.vscode/extensions.json`

- [安装 Vue Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar){target=\_blank}
- [安装 ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint){target=\_blank}
- [安装 Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint){target=\_blank}
- [安装 i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally){target=\_blank}
- [安装 Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode){target=\_blank}

## 二、安装 NVM & Node.js {#install-nvm-node}

```bash
# Linux
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
$ nvm install v20.12.2 # 新开终端窗口再执行
$ nvm use v20.12.2

# MacOS
$ brew install nvm
$ nvm install v20.12.2
$ nvm use v20.12.2
```

## 三、下载项目 {#fork-clone-proejct}

- 方式1: 推荐此方式，方便后续各种部署

  1. 先在 GitHub Fork [nuxt-quick项目](https://github.com/pieceook/nuxt-quick){target=\_blank}
  2. 再下载项目

  ```bash
  $ git clone https://github.com/${Your GitHub Name}/nuxt-quick
  ```

- 方式2:

```bash
# 直接下载项目
$ git clone https://github.com/pieceook/nuxt-quick
```

## 四、启动项目 {#run-proejct}

- 1. 使用 `Vscode` 打开项目 `nuxt-quick` （因 Vscode 插件作用范围缘故，建议单独新开一个 Vscode 窗口打开，体验更好～）
- 2. `Terminal` 终端执行命令（在项目根目录下）

```bash
# 安装依赖若遇到网络问题
  # 1. 建议安装依赖前在终端设置proxy，开启方式见下方「附：Terminal终端设置proxy」
  # 2. 或使用其它npm镜像
$ npm install # 安装依赖

# 启动项目
$ npm run dev
```

---

- 附：`Terminal` 终端设置 proxy（解决依赖安装遇到的网络问题）

```bash
  export http_proxy=http://127.0.0.1:${Your ProxyPort}
  export https_proxy=$http_proxy
  export all_proxy=http://127.0.0.1:${Your ProxyPort}
  export socks5_proxy="socks5://127.0.0.1:${Your ProxyPort}"

  # PS: 便捷方式，可设置bash/zsh alias
```
