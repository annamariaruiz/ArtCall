import Vue from 'vue';
import Router from 'vue-router';
import Users from './views/users.vue';
import Show from './views/show.vue';
import New from './views/new.vue'
import Edit from './views/edit.vue'

Vue.use(router);

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