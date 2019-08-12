import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

// eslint-disable-next-line import/prefer-default-export
export const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: () => import('@/views/HomePage.vue')
  }]
})
