import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { getDoEnv } from '@/utils'

const router = createRouter({
  history: createWebHistory(getDoEnv().VITE_PUBLIC_PATH),
  routes
})

router.beforeEach((to, from, next) => {
  console.log('to = ', to)
  console.log('from = ', from)
  next()
})

router.afterEach((to) => {
  const items = [getDoEnv().VITE_GLOB_APP_TITLE]
  to.meta.title != null && items.unshift(to.meta.title as string)
  document.title = items.join(' | ')
})

export default router
