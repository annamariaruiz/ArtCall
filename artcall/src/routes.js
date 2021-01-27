import VueRouter from 'vue-router'

const router = new VueRouter({
  routes:[
    {
      path: '/',
      name: 'home',
      component: require('./views/Home.vue')
    }
  ]
});

export default router;