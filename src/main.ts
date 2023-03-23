import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/index.scss'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import store from "@/store"

import installComponent from "@/plugins/component"

const app = createApp(App).use(router).use(ElementPlus).use(store)

// 注册全局组件
installComponent(app)

app.mount('#app')
