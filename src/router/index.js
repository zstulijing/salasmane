import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let Chat = () => import('views/Chat/Chat.vue')
let Logon = () => import('views/Logon/Logon.vue')

const routes = [
  {
    path: '',
    redirect: '/logon'
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/chat/:id',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/logon',
    name: 'Logon',
    component: Logon
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
