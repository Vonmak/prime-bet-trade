import { createRouter, createWebHistory } from 'vue-router'
import AdminHome from '../views/admin/AdminHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'prime Admin',
      component: AdminHome, 
    }
  ]
})

export default router
