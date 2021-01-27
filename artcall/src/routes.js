import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
// import Users from './views/Users.vue';
// import Show from './views/Show.vue';
// import New from './views/New.vue'
// import Edit from './views/Edit.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path:'/',
      name: 'home',
      component: Home
    }
  ]
})