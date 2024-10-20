import type { ModuleOptions as ModuleOptionsEslint } from '@nuxt/eslint'
import type { ModuleOptions as ModuleOptionsStylelint } from '@nuxtjs/stylelint-module'
import process from 'node:process'

const { NODE_ENV = '' } = process.env
const isDev = ['development', 'local'].includes(NODE_ENV)

export const eslintConf: Partial<ModuleOptionsEslint> = {
  config: {
    standalone: false
  },
  checker: true
}

export const stylelintConf: Partial<ModuleOptionsStylelint> = {
  lintOnStart: false,
  chokidar: true,
  failOnError: isDev,
  failOnWarning: isDev,
  fix: true,
  exclude: ['node_modules/', '.nuxt/', 'output/']
}
