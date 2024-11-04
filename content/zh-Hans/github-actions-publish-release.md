---
content-key: github-actions-publish-release
title: GitHub Actions实现Release自动发版
date: 2023-05-13T00:00:00Z
duration: 25min
tags:
  - Nginx
head:
  meta:
    - name: description
      content: GitHub Actions实现Release自动发版 | NuxtQuick | pieceook
---

## 一、配置Tokens、Secrets {#conf-tokens-secrets}

#### 新增 Personal access tokens {#personal-access-tokens}

- [github.com/settings/tokens](https://github.com/settings/tokens){target=\_blank}

1. Open: `Settings` -> `Developer Settings` -> `Personal access tokens`
2. Create: `Tokens(classic)` -> `Generate new token`

::cust-img-preview{imgSrc="/images/content/github-actions-publish-release/01.png"}
::

#### 配置 Project Actions secrets {#project-actions-secrets}

1. Open: `${Your Repository}` -> `Settings` -> `Secrets and variables`
2. Create: `Secrets` -> `New repository secret`

::cust-img-preview{imgSrc="/images/content/github-actions-publish-release/02.png"}
::

## 二、配置workflows {#conf-workflows}

- 具体配置文件 `.github/workflows/release-please.yml`

```yml
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
          GITHUB_TOKEN: ${{secrets.NUXT_QUICK_RELEASE_TOKEN}}

      - name: ->googleapis/release-please-action@v4
        uses: googleapis/release-please-action@v4
        with:
          token: ${{ secrets.NUXT_QUICK_RELEASE_TOKEN }}
          release-type: node
      # - run: npm ci
      #   if: ${{ steps.release.outputs.release_created }}
      # - run: npm publish
      #   env:
      #     NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
      #   if: ${{ steps.release.outputs.release_created }}
```

## 三、执行流程 {#github-actions-tag-release}

1. 在 `Repository` 下提交 `tag`

```bash
$ git tag v1.0.0
$ git push origin v1.0.0
```

2. Github会自动执行相关Action

- 执行过程：自动生成changelog、发版release

::cust-img-preview{imgSrc="/images/content/github-actions-publish-release/04.png"}
::

- 执行结果

::cust-img-preview{imgSrc="/images/content/github-actions-publish-release/03.png"}
::
