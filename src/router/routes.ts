import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta: {
      title: '登陆'
    }
  },
  {
    path: '/',
    name: 'layout',
    redirect: '/home',
    component: () => import('../components/layouts/MainView.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/HomeView.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
        meta: {
          title: '关于'
        }
      }
    ]
  },
  {
    path: '/:path*',
    name: 'not-found',
    component: () => import('../views/ErrorView.vue'),
    meta: {
      title: '404'
    }
  }
]

export default routes
