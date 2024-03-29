import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue') // set home as path '/'
  },

  {
    path: '/viewtable',
    name: 'Viewtable',
    component: () => import('../views/ViewTable.vue') // set home as path '/'
  },

  {
    path: '/reservetable',
    name: 'Reservetable',
    component: () => import('../views/ReserveTable.vue') // set home as path '/'
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router