import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/views/HelloWorld';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
