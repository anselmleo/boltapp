import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import SupportPage from '../pages/SupportPage.vue'
import SignupPage from '../pages/SignupPage.vue'

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
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupPage,
      meta: { theme: 'light' }
    }
  ]
})

export default router
