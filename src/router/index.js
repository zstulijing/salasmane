import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let Chat = () => import('views/Chat/Chat.vue')


const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
