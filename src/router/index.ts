import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import navMenu from './navMenu'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  ...navMenu
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
