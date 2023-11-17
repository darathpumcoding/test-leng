// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      // {path: '',name: 'Home',component: () => import('@/views/Home.vue'),},
      // {path: '',name: 'dashboard',component: () => import('@/views/Dashboard.vue'),},
      {path: '/',name: 'home',component: () => import('@/views/DashboardHome.vue'),},
      {path: '/manage-user',name: 'manage-user',component: () => import('@/views/ManageUsers.vue'),},
      {path: '/campaigns',name: 'campaigns',component: () => import('@/views/Campaigns.vue'),},
      {path: '/prizes',name: 'prizes',component: () => import('@/views/Prizes.vue'),},
      {path: '/reports',name: 'reports',component: () => import('@/views/Reports.vue'),},
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
