import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router)

// eslint-disable-next-line import/prefer-default-export
const router = new Router({
  routes:[{
    path: '/',
    name: 'home',
    component: () => import('@/components/Home.vue')
  }]
})

export default router
