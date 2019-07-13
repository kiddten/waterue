import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/pages/Board.vue'
import Login from '@/pages/Login.vue'
import ConfirmEmail from '@/pages/ConfirmEmail.vue'

Vue.use(Router)

export default new Router({
  'routes': [
    {
      'path': '/',
      'redirect': '/board',
    },
    {
      'path': '/board',
      'name': 'board',
      'component': Board,
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
