import { createWebHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue';
import Profile from './views/Profile.vue';
import Login from './views/Login.vue'
import FullComm from './views/FullCommission.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/profile/:id',//add on UID when database connection secured
      name: 'profile',
      component: Profile
    },
    {
      path:'/login',
      name: 'login',
      component: Login
    },
    {
      path: '/commission/:id',
      name: 'commission',
      component: FullComm
    }
  ]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;