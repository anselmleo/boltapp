import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import SupportPage from '../pages/SupportPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { theme: 'dark' }
    },
    {
      path: '/support',
      name: 'support',
      component: SupportPage,
      meta: { theme: 'light' }
    }
  ]
})

export default router
