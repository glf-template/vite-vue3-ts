import { RouteRecordRaw } from 'vue-router'

const navMenu: Array<RouteRecordRaw> = [
  {
    path: '/icon',
    name: 'icon',
    component: () => import('@/views/icon/index.vue'),
    meta: {
      name: 'icon'
    }
  }
]

export default navMenu
