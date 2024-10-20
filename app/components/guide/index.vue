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
    text: t('guide.QuickStart.text'),
    items: [
      { text: t('guide.QuickStart.Run.text'), desc: t('guide.QuickStart.Run.desc'), iconClass: 'i-solar:running-outline min-w-[32px] min-h-[32px] bg-red-5', articleLink: localePath('/article/quick-start-run-project') },
      { text: t('guide.QuickStart.Deploy.text'), desc: t('guide.QuickStart.Deploy.desc'), iconClass: 'i-pajamas:deployments min-w-[29px] min-h-[29px] bg-green-6', articleLink: localePath('/article/quick-start-deploy-project') },
      { text: t('guide.QuickStart.Blog.text'), desc: t('guide.QuickStart.Blog.desc'), iconClass: 'i-iconoir:web-window-energy-consumption min-w-[31px] min-h-[31px] bg-yellow-5', articleLink: localePath('/article/quick-start-deploy-blog') },
    ]
  },
  {
    text: t('guide.Framework.text'),
    items: [
      { text: 'Nuxt', desc: t('guide.Framework.Nuxt.desc'), iconClass: 'i-cib:nuxt-js min-w-[32px] min-h-[32px] bg-#00dc82', officialLink: 'https://github.com/nuxt/nuxt' },
      { text: 'Vue', desc: t('guide.Framework.Vue.desc'), iconClass: 'i-iconoir:vue-js min-w-[32px] min-h-[32px] bg-#41b883', officialLink: 'https://github.com/vuejs/core' },
      { text: 'TypeScript', desc: t('guide.Framework.TypeScript.desc'), iconClass: 'i-hugeicons:typescript-01 min-w-[32px] min-h-[32px] bg-#3178c6', officialLink: 'https://github.com/microsoft/TypeScript' },
      // { text: 'Nuxt', desc: 'ffffff', iconClass: 'i-logos:nuxt-icon min-w-[33px] min-h-[33px]' },
      // { text: 'Vue', desc: 'ddddd', iconClass: 'i-devicon:vuejs min-w-[30px] min-h-[30px]' },
      // { text: 'TypeScript', desc: 'ddddd', iconClass: 'i-logos:typescript-icon min-w-[26px] min-h-[26px]' }
    ]
  },
  {
    text: t('guide.Module.text'),
    items: [
      { text: t('guide.Module.Theme.text'), desc: t('guide.Module.Theme.desc'), iconClass: 'i-hugeicons:moon-landing min-w-[30px] min-h-[30px] bg-orange-5', officialLink: 'https://github.com/nuxt-modules/color-mode' },
      { text: t('guide.Module.MultiLang.text'), desc: t('guide.Module.MultiLang.desc'), iconClass: 'i-prime:language min-w-[36px] min-h-[36px]', articleLink: localePath('/article/module-multi-lang'), officialLink: 'https://github.com/nuxt-modules/i18n' },
      { text: t('guide.Module.Article.text'), desc: t('guide.Module.Article.desc'), iconClass: 'i-hugeicons:news min-w-[30px] min-h-[30px] bg-blue-5', officialLink: 'https://github.com/nuxt/content', articleLink: localePath('/article/module-article') },
      { text: 'Pinia', desc: t('guide.Module.Pinia.desc'), iconClass: 'i-logos:pinia min-w-[34px] min-h-[34px]', officialLink: 'https://github.com/vuejs/pinia' },
      { text: 'VueUse', desc: t('guide.Module.VueUse.desc'), iconClass: 'i-logos:vueuse min-w-[24px] min-h-[24px]', officialLink: 'https://github.com/vueuse/vueuse' },
      { text: t('guide.Module.Sitemap.text'), desc: t('guide.Module.Sitemap.desc'), iconClass: 'i-cil:sitemap min-w-[29px] min-h-[29px]', articleLink: localePath('/article/module-sitemap'), officialLink: 'https://github.com/nuxt-modules/sitemap' },
      { text: t('guide.Module.Analytics.gtag.text'), desc: t('guide.Module.Analytics.gtag.desc'), iconClass: 'i-logos:google-analytics min-w-[26px] min-h-[26px]', officialLink: 'https://github.com/johannschopplich/nuxt-gtag' },
      { text: 'Google Adsense', desc: t('guide.Module.Adsense.desc'), iconClass: 'i-logos:google-adsense min-w-[28px] min-h-[28px]', officialLink: 'https://github.com/nuxt-modules/google-adsense' },
    ]
  },
  {
    text: t('guide.UIDesign.text'),
    items: [
      { text: 'Element Plus', desc: t('guide.UIDesign.ElementPlus.desc'), iconClass: 'i-ep:element-plus min-w-[34px] min-h-[34px] bg-#409eff', officialLink: 'https://github.com/element-plus/element-plus' },
      { text: 'UnoCSS', desc: t('guide.UIDesign.UnoCSS.desc'), iconClass: 'i-simple-icons:unocss !min-w-[25px] !min-h-[25px] bg-#4d4d4d', officialLink: 'https://github.com/unocss/unocss' },
      { text: 'UnoCSS preset-icons', desc: t('guide.UIDesign.UnoCSS.preset-icons.desc'), iconClass: 'i-lets-icons:img-load-box min-w-[30px] min-h-[30px]', officialLink: 'https://github.com/unocss/unocss/tree/main/packages/preset-icons#readme', articleLink: localePath('/article/ui-design-unocss-preset-icons') },
      { text: t('guide.UIDesign.StickyFooter.text'), desc: t('guide.UIDesign.StickyFooter.desc'), iconClass: 'i-fluent-mdl2:footer min-w-[23px] min-h-[23px]', articleLink: localePath('/article/ui-design-sticky-footer') },
      { text: t('guide.UIDesign.ResponsiveLayout.text'), desc: t('guide.UIDesign.ResponsiveLayout.desc'), iconClass: 'i-fluent-mdl2:auto-fit-contents min-w-[24px] min-h-[24px]', articleLink: localePath('/article/ui-design-responsive-layout') },
    ]
  },
  {
    text: t('guide.Format.text'),
    items: [
      // { text: 'Vscode Extensions', desc: 'ddddd', iconClass: 'i-devicon:vscode min-w-[28px] min-h-[28px]', officialLink: 'https://marketplace.visualstudio.com/vscode' },
      { text: t('guide.Format.Save.text'), desc: t('guide.Format.Save.desc'), iconClass: 'i-material-symbols-light:format-paint-outline min-w-[36px] min-h-[36px]', articleLink: localePath('/article/format-save-auto') },
      { text: 'Eslint', desc: t('guide.Format.Eslint.desc'), iconClass: 'i-teenyicons:eslint-outline min-w-[30px] min-h-[30px] bg-#4830bd', officialLink: 'https://github.com/eslint/eslint' },
      { text: 'Stylelint', desc: t('guide.Format.Stylelint.desc'), iconClass: 'i-file-icons:stylelint min-w-[29px] min-h-[29px] bg-black', officialLink: 'https://github.com/stylelint/stylelint' },
      { text: 'Husky', desc: t('guide.Format.Husky.desc'), iconClass: 'i-la:git min-w-[33px] min-h-[33px] bg-#4a6e2a', officialLink: 'https://github.com/typicode/husky' },
      { text: 'Commitizen', desc: t('guide.Format.Commitizen.desc'), iconClass: 'i-file-icons:commitizen min-w-[30px] min-h-[30px] bg-black', officialLink: 'https://github.com/commitizen/cz-cli' },
    ]
  },
  {
    text: t('guide.Dev.text'),
    items: [
      { text: 'Vscode', desc: t('guide.Dev.Vscode.desc'), iconClass: 'i-devicon:vscode min-w-[26px] min-h-[26px]', officialLink: 'https://github.com/microsoft/vscode' },
      { text: 'NVM', desc: t('guide.Dev.NVM.desc'), iconClass: 'i-simple-icons:nvm min-w-[38px] min-h-[38px] bg-black', officialLink: 'https://github.com/nvm-sh/nvm' },
      { text: 'Node.js', desc: t('guide.Dev.Node.desc'), iconClass: 'i-nonicons:node-16 min-w-[28px] min-h-[28px] bg-#5ea04e', officialLink: 'https://github.com/nodejs/node' },
    ]
  },
  {
    text: t('guide.Deploy.text'),
    items: [
      { text: t('guide.Deploy.SelfHosting.text'), desc: t('guide.Deploy.SelfHosting.desc'), iconClass: 'i-fontisto:cloud-up min-w-[34px] min-h-[34px] bg-cyan', articleLink: localePath('/article/quick-start-deploy-project#self-hosting') },
      { text: 'Cloudflare Pages', desc: t('guide.Deploy.CloudflarePages.desc'), iconClass: 'i-cbi:cloudflare min-w-[34px] min-h-[34px] bg-#f38021', articleLink: localePath('/article/quick-start-deploy-project#cloudflare-pages'), officialLink: 'https://developers.cloudflare.com/pages/framework-guides/deploy-a-nuxt-site/#create-a-pages-project' },
      { text: 'GitHub Pages', desc: t('guide.Deploy.GitHub.Pages.desc'), iconClass: 'i-iconoir:github min-w-[29px] min-h-[29px] bg-black', articleLink: localePath('/article/quick-start-deploy-project#github-pages'), officialLink: 'https://nuxt.com/deploy/github-pages' },
      { text: 'GitHub Release', desc: t('guide.Deploy.GitHub.Release.desc'), iconClass: 'i-devicon-plain:githubactions min-w-[30px] min-h-[30px] bg-black', articleLink: localePath('/article/quick-start-deploy-project#github-release'), officialLink: 'https://github.com/googleapis/release-please-action' },
    ]
  },
  {
    text: t('guide.Roadmap.text'),
    items: [
      { text: 'Tutorial', desc: 'TODO', iconClass: 'i-streamline:arrow-roadmap min-w-[26px] min-h-[26px]' },
      { text: 'Third Login', desc: 'TODO', iconClass: 'i-basil:login-outline min-w-[36px] min-h-[36px]' },
      { text: 'Debug page', desc: 'TODO', iconClass: 'i-codicon:debug-rerun min-w-[30px] min-h-[30px]' },
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
  <div class="guide-comp">
    <div v-for="(subItem, subIndex) in subArr" :key="subIndex" class="sub-item">
      <div class="sub-item-top">
        <ComImg v-if="isArticleContentkeyRoute" icon-class="i-streamline:target" />
        <span class="ml-[4px] min-h-[30px] min-w-[30px]">{{ subItem.text }}</span>
      </div>
      <div class="sub-item-bottom">
        <template
          v-for="(item, index) in subItem.items" :key="index">
          <ElButton class="btn-wrap" @click="handleJump(item)">
            <div class="btn-content">
              <div class="btn-top">
                <ComImg :icon-class="item.iconClass" />
                <p class="top-text">{{ item.text }}</p>
              </div>
              <div class="btn-desc">{{ item.desc }}</div>
              <div class="btn-links">
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

<style lang="scss" scoped>
.guide-comp {
  @apply flex flex-col;

  .sub-item {
    @apply mb-[20px];

    .sub-item-top {
      @apply mb-[8px] flex items-center text-[22px];
    }

    .sub-item-bottom {
      @apply grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[14px];
      @apply lt-sm:grid-cols-3 lt-sm:gap-[10px];

      :deep(.btn-wrap) {
        @apply pos-relative min-h-[110px] w-full flex border rounded-xl shadow-md !m-0 !h-full !justify-start !p-[20px] !pt-[12px];
        @apply lt-sm:min-h-[90px] lt-sm:!p-x-[10px];

        span {
          @apply w-full;
          @apply lt-sm:justify-center;

          .btn-content {
            @apply flex flex-col items-start justify-start whitespace-pre-wrap;
            @apply lt-sm:m-auto lt-sm:p-b-[10px];

            .btn-top {
              @apply flex items-center justify-center;
              @apply lt-sm:flex-col;

              .img-icon {
                @apply lt-sm:m-b-[6px];
              }

              .top-text {
                @apply ml-[8px] text-[16px] lh-20px max-line-2;
                @apply lt-sm:ml-[0];
              }
            }
          }

          .btn-desc {
            @apply mb-[16px] mt-[8px] break-anywhere text-left text-wrap text-[14px] font-normal line-height-[18px];
            @apply lt-sm:hidden text-style2;
          }

          .btn-links {
            @apply pos-absolute bottom-[6px] right-[6px] flex gap-col-[10px];
          }
        }
      }
    }
  }
}
</style>
