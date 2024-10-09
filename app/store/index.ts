import { defineStore } from 'pinia'

export const useSiteStore = defineStore('site', {
  state: () => ({
    isSiderCollapsed: true
  }),
  actions: {
    toggleSiderCollapse() {
      this.isSiderCollapsed = !this.isSiderCollapsed

      const isLocked = useScrollLock(document.documentElement)
      isLocked.value = !this.isSiderCollapsed
    }
  }
})

// export const useSiteStore = defineStore('site', () => {
//   const isSiderCollapsed = ref(true)
//   const toggleSiderCollapse = () => {
//     isSiderCollapsed.value = !isSiderCollapsed.value

//     const isLocked = useScrollLock(document.documentElement)
//     isLocked.value = !isSiderCollapsed.value
//   }

//   return {
//     isSiderCollapsed,
//     toggleSiderCollapse,
//   }
// })
