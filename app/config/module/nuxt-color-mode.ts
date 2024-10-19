import type { ModuleOptions } from '@nuxtjs/color-mode'

export const colorModeConf: Partial<ModuleOptions> = {
  preference: 'system',
  fallback: 'light',
  hid: 'nquick-color-mode-script',
  globalName: 'nquick-color-mode',
  componentName: 'ColorMode',
  classPrefix: '',
  classSuffix: '',
  storageKey: 'nquick-color-mode',
}
