import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobremi',
    name: 'Sobre mi',
    component: () => import('../views/sobremi.vue')
  },
  {
    path: '/elsmeusviatges',
    name: 'Els meus viatges',
    component: () => import('../views/elsmeusviatges.vue')
  },
  {
    path: '/resenyes',
    name: 'Resenyes',
    component: () => import('../views/resenyes.vue')
  },
  {
    path: '/galeria',
    name: 'Galeria',
    component: () => import('../views/galeria.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
