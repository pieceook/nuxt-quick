import { defineStore } from 'pinia'

interface ScrollPosition {
  scrollTop?: number
}

export const useElScrollStore = defineStore('el-scroll', {
  state: () => ({
    map: {} as Record<string, ScrollPosition>
  }),
  actions: {
    update(key: string, newPosition: ScrollPosition) {
      this.map[key] = { ...this.map[key], ...newPosition }
      console.error()
    }
  }
})
