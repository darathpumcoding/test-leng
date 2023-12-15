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
      // {path: '/manage-user',name: 'manage-user',component: () => import('@/views/ManageUsers.vue'),},
      // {path: '/campaigns',name: 'campaigns',component: () => import('@/views/Campaigns.vue'),},
      // {path: '/prizes',name: 'prizes',component: () => import('@/views/Prizes.vue'),},
      // {path: '/reports',name: 'reports',component: () => import('@/views/Reports.vue'),},
      // {path: '/addCompaign',name: 'addCompaign',component: () => import('@/views/Form/AddCompaign.vue'),},
      // {path: '/updateCompaign',name: 'updateCompaign',component: () => import('@/views/Form/UpdateCompaign.vue'),},
      {path: '/manage-user',name: 'manage-user',component: () => import('@/views/dashboard-categories/ManageUsers.vue'),},
      {path: '/campaigns',name: 'campaigns',component: () => import('@/views/dashboard-categories/Campaigns.vue'),},
      {path: '/prizes',name: 'prizes',component: () => import('@/views/dashboard-categories/Prizes.vue'),},
      {path: '/reports',name: 'reports',component: () => import('@/views/dashboard-categories/Reports.vue'),},
      
      
      // AuthenticatorAssertionResponseComponent
      {path: '/addUser',name: 'addUser',component: () => import('@/views/form/AddUser.vue'),},  
      {path: '/login',name: 'login',component: () => import('@/views/auth/Login.vue'),},
      {path: '/reset-password',name: 'reset-password',component: () => import('@/views/auth/ResetPassword.vue'),},
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
