import type { App } from 'vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import 'virtual:svg-icons-register'
import SvgIcon from '@/components/base/SvgIcon.vue'

export default (app: App) => {
  //注册element图标组件
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  //注册svg图标组件
  app.component('SvgIcon', SvgIcon)
}
