import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/pages/Board.vue'
import Login from '@/pages/Login.vue'
import ConfirmEmail from '@/pages/ConfirmEmail.vue'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  'routes': [
    {
      'path': '/',
      'redirect': '/board',
      'meta': { 'requiredAuth': true },
    },
    {
      'path': '/board',
      'name': 'board',
      'component': Board,
      'meta': { 'requiredAuth': true },
    },
    {
      'path': '/login',
      'name': 'login',
      'component': Login,
    },
    {
      'path': '/confirm',
      'name': 'confirm',
      'component': ConfirmEmail,
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiredAuth)) {
    if (store.getters.isAuthenticated) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
