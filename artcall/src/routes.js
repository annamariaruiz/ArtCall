import VueRouter from 'vue-router'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'home',
      component: require('./views/Home.vue')
    }
  ]
})

export default router