import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/index.scss'
import 'element-plus/theme-chalk/src/message.scss'

import store from '@/store'

import installComponent from '@/plugins/component'

const app = createApp(App).use(router).use(store)

// 注册全局组件
installComponent(app)

app.mount('#app')
