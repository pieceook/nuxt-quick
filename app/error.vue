<script setup lang="ts">
interface ErrorObject {
  url: string
  statusCode: number
  statusMessage: string
  message: string
  description: string
  data: any
}

defineProps<{
  error: ErrorObject
}>()
const { t } = useI18n()

const localePath = useLocalePath()
</script>

<template>
  <NuxtLayout name="default">
    <main>
      <div class="flex flex-col items-center justify-center def-media">
        <h2 class="font-size-[100px] color-#ba3329">{{ error.statusCode }}</h2>
        <p class="color-#858585c1">{{ error.message }}</p>
        <NuxtLink :to="localePath('/')">
          <ElButton class="mt-[20px] !px-[18px] !py-[16px]">
            {{ t('site.Home') }}
          </ElButton>
        </NuxtLink>
      </div>
    </main>
  </NuxtLayout>
</template>
