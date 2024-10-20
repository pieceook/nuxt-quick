import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-config/flat'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    unocss,
    ignores: ['.output/**', '.nuxt/**', '.delete/', '**/*.md', 'dist/**'],
    // unocss: true,
    stylistic: true,
    typescript: true,
    vue: true,
    jsonc: false,
    yaml: false,
    rules: {
      'vue/singleline-html-element-content-newline': 'off',
      'vue/html-closing-bracket-newline': 'off',
      // 'vue/html-self-closing': 'off',
      'vue/comma-dangle': 'off',
      'style/comma-dangle': 'off',
      'style/indent': 2,
      'jsonc/sort-keys': 'off',
      'antfu/top-level-function': 'off',
      'no-console': 'off',
      'style/brace-style': 'off',
      'eslint-comments/no-unlimited-disable': 'off',
      'ts/ban-ts-comment': 'off'
    }
  })
)
