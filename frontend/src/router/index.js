import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/pages/HomePage.vue'
import AboutPage from '../views/pages/AboutPage.vue'
import MusicPage from '../views/pages/MusicPage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/music',
    name: 'MusicPage',
    component: MusicPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
