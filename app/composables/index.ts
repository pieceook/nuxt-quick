import { useElScrollStore } from '@/store/el'
import { useThrottleFn } from '@vueuse/core'

export const useScroller = (elKey: string) => {
  const elScrollStore = useElScrollStore()

  const scrollerObj = elScrollStore.map[elKey]
  let scrollEl: HTMLElement | null = null

  const restoreScrollPosition = () => {
    if (scrollEl) {
      scrollEl.scrollTop = scrollerObj?.scrollTop || 0
    }
  }

  const throttledFn = useThrottleFn(() => {
    if (scrollEl) {
      elScrollStore.update(elKey, { scrollTop: scrollEl.scrollTop })
    }
  }, 50)

  onMounted(() => {
    scrollEl = document.querySelector(elKey) as HTMLElement

    if (scrollEl) {
      scrollEl.addEventListener('scroll', throttledFn)
      restoreScrollPosition()
    }
  })

  onUnmounted(() => {
    if (scrollEl) {
      scrollEl.removeEventListener('scroll', throttledFn)
    }
  })
}
