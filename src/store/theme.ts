import { defineStore } from 'pinia'

export const useThemeStore = defineStore({
  id: 'theme', // id必填，且需要唯一
  state: () => {
    return {
      themeMode: '#CDCDFF',
      themeColor: '#409EFF'
    }
  },
  actions: {
    updateThemeMode(themeMode: string) {
      this.themeMode = themeMode
    },
    updateThemeColor(themeColor: string) {
      this.themeColor = themeColor
    }
  }
})
