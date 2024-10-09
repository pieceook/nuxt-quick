<script setup lang="ts">
import { Select } from '@element-plus/icons-vue'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div class="com-locale">
    <ElDropdown placement="bottom" trigger="click">
      <el-button class="r-[8px] mr-[0] pl-[15px] pr-[12px] hover-z-2 dark:mr-[0] !b-none !py-[17px] lt-sm:!bg-transparent lt-sm:!px-0">
        <div class="i-prime:language h-[30px] w-[30px] lt-sm:mr-[-4px]" />
      </el-button>
      <template #dropdown>
        <ElDropdownMenu>
          <NuxtLink v-for="localeItem in locales" :key="localeItem.code" :to="switchLocalePath(localeItem.code)" data-allow-mismatch replace>
            <ElDropdownItem class="locale-dropdown-item" :class="{ 'active-class': locale === localeItem.code }">
              <span>{{ localeItem.name }}</span>
              <el-icon><Select /></el-icon>
            </ElDropdownItem>
          </NuxtLink>
        </ElDropdownMenu>
      </template>
    </ElDropdown>
  </div>
</template>

<style lang="scss" scoped>
.locale-dropdown-item {
  justify-content: space-between;

  .el-icon {
    margin-left: 10px;
  }

  &:not(.active-class) {
    .el-icon {
      display: none;
    }
  }
}
</style>
