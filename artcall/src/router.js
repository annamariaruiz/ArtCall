import Vue from 'vue';
import Router from 'vue-router';
import Users from './views/Users.vue';
import Show from './views/Show.vue';
import New from './views/New.vue'
import Edit from './views/Edit.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/users'
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/users/new',
      name: 'new-user',
      component: New
    },
    {
      path: '/users/:id',
      name: 'show',
      component: Show
    },
    {
      path: '/users/:id/edit',
      name: 'edit',
      component: Edit
    }
  ]
})