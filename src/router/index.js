import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/pages/Home.vue'
import Authentication from '../views/pages/Authentication.vue'
import EmailVerification from '../views/pages/EmailVerification.vue'

import Fullwidth from '../views/layouts/Fullwidth.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/home',
    name: 'Homex',
    component: Fullwidth,
      children: [
        {
          path: '',
          name: 'Homexx',
          component: Home

        }
      ]
  },

  {
    path: '/auth',
    name: 'Auth',
    component: Authentication
  },

  {
    path: '/verify',
    name: 'Verify',
    component: EmailVerification
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
