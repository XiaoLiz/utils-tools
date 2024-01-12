import { createRouter, createWebHashHistory, RouterOptions, Router, RouteRecordRaw } from 'vue-router'

import Home from '@/views/home.vue'
const routes: RouteRecordRaw[] = [{ path: '/', component: Home }]

const options: RouterOptions = {
  history: createWebHashHistory(),
  routes
}

const router: Router = createRouter(options)
export default router
