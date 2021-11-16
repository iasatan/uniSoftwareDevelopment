import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/pages/HomePage.vue'
import AboutPage from '../views/pages/AboutPage.vue'
import LoginPage from '../views/pages/LoginPage.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
    meta: {
      requiresAdmin: true
    }
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const isLoggedIn = store.getters.isLoggedIn;

    if (!isLoggedIn) {
      next({ name: 'LoginPage' });
    } 

    next();
  }

  if (to.matched.some(record => record.meta.requiresAdmin)) {
    const isLoggedIn = store.getters.isLoggedIn;
    const user = store.getters.getUser;

    if (!isLoggedIn || (user?.role !== 1)) {
      next({ name: 'HomePage' });
    }

    next();
  }

  next();

});

export default router
