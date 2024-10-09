<script setup lang="ts">
const { t } = useI18n()
const colorModeArr = [
  { modeKey: 'system', text: computed(() => t('site.System')), iconClass: 'i-hugeicons:moon-landing w-[24px] h-[24px] mr-[10px] font-600' },
  { modeKey: 'dark', text: computed(() => t('site.Dark')), iconClass: 'i-line-md:moon-alt-loop w-[24px] h-[24px] mr-[8px]' },
  { modeKey: 'light', text: computed(() => t('site.Light')), iconClass: 'i-line-md:sunny-outline-loop w-[24px] h-[24px] mr-[8px]' },
]

const getColorModeByKey = (modeKey: string) => colorModeArr.find(i => i.modeKey === modeKey)
</script>

<template>
  <div class="com-color-mode">
    <ElDropdown placement="bottom" trigger="click">
      <el-button class="r-[8px] mr-[-20px] pl-[15px] pr-[12px] hover-z-2 dark:mr-[0] lt-sm:mr-[-2px] !b-none !py-[17px] lt-sm:!bg-transparent lt-sm:!px-0">
        <ClientOnly>
          <ComImg :icon-class="getColorModeByKey($colorMode.preference)?.iconClass" class="!mr-[6px] lt-sm:!mr-[0]" />
          <template #placeholder>
            <ComImg :icon-class="colorModeArr[0]?.iconClass" class="!mr-[6px] lt-sm:!mr-[0]" />
          </template>
        </ClientOnly>
      </el-button>
      <template #dropdown>
        <ClientOnly>
          <ElDropdownMenu>
            <div v-for="colorItem in colorModeArr" :key="colorItem.modeKey" class="color-item" @click="$colorMode.preference = colorItem.modeKey">
              <ElDropdownItem
                :class="{
                  'active-class': $colorMode.preference === colorItem.modeKey
                }"
              >
                <ComImg :icon-class="colorItem.iconClass" class="icon-color-mode" />
                <span>{{ colorItem.text }}</span>
              </ElDropdownItem>
            </div>
          </ElDropdownMenu>
        </ClientOnly>
      </template>
    </ElDropdown>
  </div>
</template>
