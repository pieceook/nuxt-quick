<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()
interface SubItemInter {
  text: string | ComputedRef<string>
  desc: string | ComputedRef<string>
  iconClass: string
  officialLink?: string
  articleLink?: string
}

interface SubArrInter {
  text: string
  items: SubItemInter[]
}

const subArr: SubArrInter[] = [
  {
    text: t('site.QuickStart.text'),
    items: [
      { text: t('site.QuickStart.Run.text'), desc: t('site.QuickStart.Run.desc'), iconClass: 'i-solar:running-outline min-w-[32px] min-h-[32px] bg-red-5', articleLink: localePath('/article/quick-start-run-project') },
      { text: t('site.QuickStart.Deploy.text'), desc: t('site.QuickStart.Deploy.desc'), iconClass: 'i-pajamas:deployments min-w-[29px] min-h-[29px] bg-green-6', articleLink: localePath('/article/quick-start-deploy-project') },
      { text: t('site.QuickStart.Blog.text'), desc: t('site.QuickStart.Blog.desc'), iconClass: 'i-iconoir:web-window-energy-consumption min-w-[31px] min-h-[31px] bg-yellow-5', articleLink: localePath('/article/quick-start-deploy-blog') },
    ]
  },
  {
    text: t('site.Framework.text'),
    items: [
      { text: 'Nuxt', desc: t('site.Framework.Nuxt.desc'), iconClass: 'i-cib:nuxt-js min-w-[32px] min-h-[32px] bg-#00dc82', officialLink: 'https://github.com/nuxt/nuxt' },
      { text: 'Vue', desc: t('site.Framework.Vue.desc'), iconClass: 'i-iconoir:vue-js min-w-[32px] min-h-[32px] bg-#41b883', officialLink: 'https://github.com/vuejs/core' },
      { text: 'TypeScript', desc: t('site.Framework.TypeScript.desc'), iconClass: 'i-hugeicons:typescript-01 min-w-[32px] min-h-[32px] bg-#3178c6', officialLink: 'https://github.com/microsoft/TypeScript' },
      // { text: 'Nuxt', desc: 'ffffff', iconClass: 'i-logos:nuxt-icon min-w-[33px] min-h-[33px]' },
      // { text: 'Vue', desc: 'ddddd', iconClass: 'i-devicon:vuejs min-w-[30px] min-h-[30px]' },
      // { text: 'TypeScript', desc: 'ddddd', iconClass: 'i-logos:typescript-icon min-w-[26px] min-h-[26px]' }
    ]
  },
  {
    text: t('site.Module.text'),
    items: [
      { text: t('site.Module.Theme.text'), desc: t('site.Module.Theme.desc'), iconClass: 'i-hugeicons:moon-landing min-w-[30px] min-h-[30px] bg-orange-5', officialLink: 'https://github.com/nuxt-modules/color-mode' },
      { text: t('site.Module.MultiLang.text'), desc: t('site.Module.MultiLang.desc'), iconClass: 'i-prime:language min-w-[36px] min-h-[36px]', articleLink: localePath('/article/module-multi-lang'), officialLink: 'https://github.com/nuxt-modules/i18n' },
      { text: t('site.Module.Article.text'), desc: t('site.Module.Article.desc'), iconClass: 'i-hugeicons:news min-w-[30px] min-h-[30px] bg-blue-5', officialLink: 'https://github.com/nuxt/content', articleLink: localePath('/article/module-article') },
      { text: 'Pinia', desc: t('site.Module.Pinia.desc'), iconClass: 'i-logos:pinia min-w-[34px] min-h-[34px]', officialLink: 'https://github.com/vuejs/pinia' },
      { text: t('site.Module.Analytics.gtag.text'), desc: t('site.Module.Analytics.gtag.desc'), iconClass: 'i-tabler:brand-google-analytics min-w-[28px] min-h-[28px] bg-#f9ab00', officialLink: 'https://github.com/johannschopplich/nuxt-gtag' },
    ]
  },
  {
    text: t('site.UIDesign.text'),
    items: [
      { text: 'Element Plus', desc: t('site.UIDesign.ElementPlus.desc'), iconClass: 'i-ep:element-plus min-w-[34px] min-h-[34px] bg-#409eff', officialLink: 'https://github.com/element-plus/element-plus' },
      { text: 'UnoCSS', desc: t('site.UIDesign.UnoCSS.desc'), iconClass: 'i-simple-icons:unocss !min-w-[25px] !min-h-[25px] bg-#4d4d4d', officialLink: 'https://github.com/unocss/unocss' },
      { text: 'UnoCSS preset-icons', desc: t('site.UIDesign.UnoCSS.preset-icons.desc'), iconClass: 'i-lets-icons:img-box-light min-w-[32px] min-h-[32px]', officialLink: 'https://github.com/unocss/unocss/tree/main/packages/preset-icons#readme', articleLink: localePath('/article/ui-design-unocss-preset-icons') },
      { text: t('site.UIDesign.StickyFooter.text'), desc: t('site.UIDesign.StickyFooter.desc'), iconClass: 'i-fluent-mdl2:footer min-w-[23px] min-h-[23px]', articleLink: localePath('/article/ui-design-sticky-footer') },
      { text: t('site.UIDesign.ResponsiveLayout.text'), desc: t('site.UIDesign.ResponsiveLayout.desc'), iconClass: 'i-fluent-mdl2:auto-fit-contents min-w-[24px] min-h-[24px]', articleLink: localePath('/article/ui-design-responsive-layout') },
    ]
  },
  {
    text: t('site.Format.text'),
    items: [
      // { text: 'Vscode Extensions', desc: 'ddddd', iconClass: 'i-devicon:vscode min-w-[28px] min-h-[28px]', officialLink: 'https://marketplace.visualstudio.com/vscode' },
      { text: t('site.Format.Save.text'), desc: t('site.Format.Save.desc'), iconClass: 'i-material-symbols-light:format-paint-outline min-w-[36px] min-h-[36px]', articleLink: localePath('/article/format-save-auto') },
      { text: 'Eslint', desc: t('site.Format.Eslint.desc'), iconClass: 'i-teenyicons:eslint-outline min-w-[30px] min-h-[30px] bg-#4830bd', officialLink: 'https://github.com/eslint/eslint' },
      { text: 'Stylelint', desc: t('site.Format.Stylelint.desc'), iconClass: 'i-file-icons:stylelint min-w-[29px] min-h-[29px] bg-black', officialLink: 'https://github.com/stylelint/stylelint' },
      { text: 'Husky', desc: t('site.Format.Husky.desc'), iconClass: 'i-la:git min-w-[33px] min-h-[33px] bg-#4a6e2a', officialLink: 'https://github.com/typicode/husky' },
      { text: 'Commitizen', desc: t('site.Format.Commitizen.desc'), iconClass: 'i-file-icons:commitizen min-w-[30px] min-h-[30px] bg-black', officialLink: 'https://github.com/commitizen/cz-cli' },
      // { text: 'Eslint', desc: 'uuuuuu', iconClass: 'i-logos:eslint min-w-[30px] min-h-[30px]' },
      // { text: 'Stylelint', desc: 'uuuuuu', iconClass: 'i-logos:stylelint min-w-[29px] min-h-[29px]' },
    ]
  },
  {
    text: t('site.Dev.text'),
    items: [
      { text: 'Vscode', desc: t('site.Dev.Vscode.desc'), iconClass: 'i-devicon:vscode min-w-[26px] min-h-[26px]', officialLink: 'https://github.com/microsoft/vscode' },
      { text: 'NVM', desc: t('site.Dev.NVM.desc'), iconClass: 'i-simple-icons:nvm min-w-[38px] min-h-[38px] bg-black', officialLink: 'https://github.com/nvm-sh/nvm' },
      { text: 'Node.js', desc: t('site.Dev.Node.desc'), iconClass: 'i-nonicons:node-16 min-w-[28px] min-h-[28px] bg-#5ea04e', officialLink: 'https://github.com/nodejs/node' },
    ]
  },
  {
    text: t('site.Deploy.text'),
    items: [
      { text: t('site.Deploy.SelfHosting.text'), desc: t('site.Deploy.SelfHosting.desc'), iconClass: 'i-fontisto:cloud-up min-w-[34px] min-h-[34px] bg-cyan', articleLink: localePath('/article/quick-start-deploy-project#self-hosting') },
      { text: 'Cloudflare Pages', desc: t('site.Deploy.CloudflarePages.desc'), iconClass: 'i-cbi:cloudflare min-w-[34px] min-h-[34px] bg-#f38021', articleLink: localePath('/article/quick-start-deploy-project#cloudflare-pages'), officialLink: 'https://developers.cloudflare.com/pages/framework-guides/deploy-a-nuxt-site/#create-a-pages-project' },
      { text: 'GitHub Pages', desc: t('site.Deploy.GitHub.Pages.desc'), iconClass: 'i-iconoir:github min-w-[29px] min-h-[29px] bg-black', articleLink: localePath('/article/quick-start-deploy-project#github-pages'), officialLink: 'https://nuxt.com/deploy/github-pages' },
      { text: 'GitHub Release', desc: t('site.Deploy.GitHub.Release.desc'), iconClass: 'i-devicon-plain:githubactions min-w-[30px] min-h-[30px] bg-black', articleLink: localePath('/article/quick-start-deploy-project#github-release'), officialLink: 'https://github.com/googleapis/release-please-action' },
    ]
  },
  {
    text: t('site.Roadmap.text'),
    items: [
      { text: 'Tutorial', desc: 'TODO', iconClass: 'i-streamline:arrow-roadmap min-w-[26px] min-h-[26px]' },
      { text: 'Third Login', desc: 'TODO', iconClass: 'i-basil:login-outline min-w-[36px] min-h-[36px]' },
      { text: 'Debug page', desc: 'TODO', iconClass: 'i-codicon:debug-rerun min-w-[30px] min-h-[30px]' },
      // { text: 'Roadmap', desc: 'uuuuuu', iconClass: 'i-streamline:arrow-roadmap min-w-[28px] min-h-[28px]' },
    ]
  },
]

const route = useRoute()
const router = useRouter()
const isArticleContentkeyRoute = (route.name as string).includes('article-contentkey')

const handleJump = (item: SubItemInter) => {
  const link = item.articleLink || item.officialLink
  if (!link) {
    ElNotification({
      message: 'Comming soon!',
      type: 'info',
      duration: 1800
    })
    return
  }
  if (isArticleContentkeyRoute && item.articleLink) {
    router.push(localePath(item.articleLink))
  } else {
    window.open(link)
  }
}

// const mockError = () => {
//   showError({
//     statusCode: [500, 404][Math.floor(Math.random() * 2)],
//     statusMessage: 'error-statusmsg-statusmsg',
//     message: 'This is from a test error msg.',
//     data: {
//       customField: true
//     }
//   })
// }
</script>

<template>
  <div class="flex flex-col">
    <div v-for="(subItem, subIndex) in subArr" :key="subIndex" class="sub-item mb-[20px]">
      <div class="sub-item-text mb-[8px] flex items-center text-[22px]">
        <ComImg v-if="isArticleContentkeyRoute" icon-class="i-streamline:target" />
        <span class="ml-[4px] min-h-[30px] min-w-[30px]">{{ subItem.text }}</span>
      </div>
      <div class="items-wrap grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[14px] lt-sm:gap-[10px]">
        <template
          v-for="(item, index) in subItem.items" :key="index">
          <ElButton class="btn-wrap pos-relative min-h-[110px] w-full flex border rounded-xl shadow-md !m-0 !h-full lt-sm:min-h-[90px] !justify-start !p-[20px] !pt-[12px]" @click="handleJump(item)">
            <div class="btn-content flex flex-col items-start justify-start whitespace-pre-wrap">
              <div class="btn-top flex items-center justify-center">
                <ComImg :icon-class="item.iconClass" />
                <p class="ml-[8px] text-left text-[16px] lh-20px">{{ item.text }}</p>
              </div>
              <div class="btn-desc mb-[16px] mt-[8px] break-anywhere text-left text-wrap text-[14px] font-normal line-height-[18px] text-style2">{{ item.desc }}</div>
              <div class="pos-absolute bottom-[6px] right-[6px] flex gap-col-[10px]">
                <div v-if="item.articleLink" title="Article Link">
                  <NuxtLink :to="item.articleLink" target="_blank" @click.capture.stop><ComImg icon-class="i-streamline:new-file w-[15px] h-[15px]" /></NuxtLink>
                </div>

                <div v-if="item.officialLink" title="Official Link">
                  <ElLink :href="item.officialLink" target="_blank" rel="nofollow" @click.capture.stop><ComImg icon-class="i-ph:share-fat w-[18px] h-[18px]" /></ElLink>
                </div>
              </div>
            </div>
          </ElButton>
        </template>
      </div>
    </div>
  </div>
  <!-- <div class="color-mode">
        <ClientOnly>
          Color preference:
          <b>{{ $colorMode.preference }}</b>
          Color value:
          <b>{{ $colorMode.value }}</b>
          <template #placeholder>
            <span>...</span>
          </template>
        </ClientOnly>
      </div>
      <ElButton @click="mockError">MockError</ElButton> -->
</template>
