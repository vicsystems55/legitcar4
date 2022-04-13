import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/pages/public/Home.vue'
import Authentication from '../views/pages/Authentication.vue'
import EmailVerification from '../views/pages/EmailVerification.vue'

import Fullwidth from '../views/layouts/Fullwidth.vue'


//Buyers

import BuyerDashboard from '../views/pages/buyers/Dashboard.vue'

import BuyerAccounts from '../views/pages/buyers/Accounts.vue'

import BuyerAccountDetails from '../views/pages/buyers/AccountDetails.vue'

import BuyerCreateListing from '../views/pages/buyers/CreateListing.vue'

import BuyerListingDetails from '../views/pages/buyers/ListingDetails.vue'

import BuyerListings from '../views/pages/buyers/Listings.vue'

import BuyerMessages from '../views/pages/buyers/Messages.vue'

import BuyerNotifications from '../views/pages/buyers/Notifications.vue'

import BuyerProfile from '../views/pages/buyers/Profile.vue'




//Buyers


//buyers


//public




// home
// about
// contact
// store
// login
// register
// forgot-password
// reset-password
// cart
// details

// dashboard
// profile
// create listing
// listings
// listing-details
// notifications
// messages
// reservations
// accounts
// account-details

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
          name: 'Homex',
          component: Home

        }
      ]
  },

//Buyers routes
  {
    path: '/buyers/',
    component: Fullwidth,
      children: [
        {
          path: 'dashboard',
          name: 'buyers-dashboard',
          component: BuyerDashboard

        }
      ]
  },

  {
    path: '/buyers/',
    component: Fullwidth,
      children: [
        {
          path: 'accounts',
          name: 'buyers-accounts',
          component: BuyerAccounts

        }
      ]
  },

  {
    path: '/buyers/',
    component: Fullwidth,
      children: [
        {
          path: 'accounts-details',
          name: 'buyers-account-details',
          component: BuyerAccountDetails

        }
      ]
  },


  {
    path: '/buyers/',
    component: Fullwidth,
      children: [
        {
          path: 'create-listing',
          name: 'buyers-create-listing',
          component: BuyerCreateListing

        }
      ]
  },

  {
    path: '/buyers/',
    component: Fullwidth,
      children: [
        {
          path: 'listings',
          name: 'buyers-listings',
          component: BuyerListings

        }
      ]
  },

  {
    path: '/buyers/',
    component: Fullwidth,
      children: [
        {
          path: 'listing-details',
          name: 'buyers-listing-details',
          component: BuyerListingDetails

        }
      ]
  },

  {
    path: '/buyers/',
    component: Fullwidth,
      children: [
        {
          path: 'messages',
          name: 'buyers-messages',
          component: BuyerMessages

        }
      ]
  },

  {
    path: '/buyers/',
    component: Fullwidth,
      children: [
        {
          path: 'notifications',
          name: 'buyers-notifications',
          component: BuyerNotifications

        }
      ]
  },

  {
    path: '/buyers/',
    component: Fullwidth,
      children: [
        {
          path: 'profile',
          name: 'buyers-profile',
          component: BuyerProfile

        }
      ]
  },

  /////

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
