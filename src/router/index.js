import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/pages/public/Home.vue'
import Authentication from '../views/pages/Authentication.vue'
import EmailVerification from '../views/pages/EmailVerification.vue'

import Fullwidth from '../views/layouts/Fullwidth.vue'


//admin

import AdminDashboard from '../views/pages/admin/Dashboard.vue'

import AdminAccounts from '../views/pages/admin/Accounts.vue'

import AdminAccountDetails from '../views/pages/admin/AccountDetails.vue'

import AdminCreateListing from '../views/pages/admin/CreateListing.vue'

import AdminListingDetails from '../views/pages/admin/ListingDetails.vue'

import AdminListings from '../views/pages/admin/Listings.vue'

import AdminMessages from '../views/pages/admin/Messages.vue'

import AdminNotifications from '../views/pages/admin/Notifications.vue'

import AdminProfile from '../views/pages/admin/Profile.vue'


import AgentDashboard from '../views/pages/agents/Dashboard.vue'

import AgentAccounts from '../views/pages/agents/Accounts.vue'

import AgentAccountDetails from '../views/pages/agents/AccountDetails.vue'

import AgentCreateListing from '../views/pages/agents/CreateListing.vue'

import AgentListingDetails from '../views/pages/agents/ListingDetails.vue'

import AgentListings from '../views/pages/agents/Listings.vue'

import AgentMessages from '../views/pages/agents/Messages.vue'

import AgentNotifications from '../views/pages/agents/Notifications.vue'

import AgentProfile from '../views/pages/agents/Profile.vue'



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





//agents


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

//admin routes
  {
    path: '/admin/',
    component: Fullwidth,
      children: [
        {
          path: 'dashboard',
          name: 'admin-dashboard',
          component: AdminDashboard

        }
      ]
  },

  {
    path: '/admin/',
    component: Fullwidth,
      children: [
        {
          path: 'accounts',
          name: 'admin-accounts',
          component: AdminAccounts

        }
      ]
  },

  {
    path: '/admin/',
    component: Fullwidth,
      children: [
        {
          path: 'accounts-details',
          name: 'admin-account-details',
          component: AdminAccountDetails

        }
      ]
  },


  {
    path: '/admin/',
    component: Fullwidth,
      children: [
        {
          path: 'create-listing',
          name: 'admin-create-listing',
          component: AdminCreateListing

        }
      ]
  },

  {
    path: '/admin/',
    component: Fullwidth,
      children: [
        {
          path: 'listings',
          name: 'admin-listings',
          component: AdminListings

        }
      ]
  },

  {
    path: '/admin/',
    component: Fullwidth,
      children: [
        {
          path: 'listing-details',
          name: 'admin-listing-details',
          component: AdminListingDetails

        }
      ]
  },

  {
    path: '/admin/',
    component: Fullwidth,
      children: [
        {
          path: 'messages',
          name: 'admin-messages',
          component: AdminMessages

        }
      ]
  },

  {
    path: '/admin/',
    component: Fullwidth,
      children: [
        {
          path: 'notifications',
          name: 'admin-notifications',
          component: AdminNotifications

        }
      ]
  },

  {
    path: '/admin/',
    component: Fullwidth,
      children: [
        {
          path: 'profile',
          name: 'admin-profile',
          component: AdminProfile

        }
      ]
  },

//agents
  {
    path: '/agents/',
    component: Fullwidth,
      children: [
        {
          path: 'dashboard',
          name: 'agents-dashboard',
          component: AgentDashboard

        }
      ]
  },

  {
    path: '/agents/',
    component: Fullwidth,
      children: [
        {
          path: 'accounts',
          name: 'agents-accounts',
          component: AgentAccounts

        }
      ]
  },

  {
    path: '/agents/',
    component: Fullwidth,
      children: [
        {
          path: 'accounts-details',
          name: 'agents-account-details',
          component: AgentAccountDetails

        }
      ]
  },

//buyers
  {
    path: '/agents/',
    component: Fullwidth,
      children: [
        {
          path: 'create-listing',
          name: 'agents-create-listing',
          component: AgentCreateListing

        }
      ]
  },

  {
    path: '/agents/',
    component: Fullwidth,
      children: [
        {
          path: 'listings',
          name: 'agents-listings',
          component: AgentListings

        }
      ]
  },

  {
    path: '/agents/',
    component: Fullwidth,
      children: [
        {
          path: 'listing-details',
          name: 'agents-listing-details',
          component: AgentListingDetails

        }
      ]
  },

  {
    path: '/agents/',
    component: Fullwidth,
      children: [
        {
          path: 'messages',
          name: 'agents-messages',
          component: AgentMessages

        }
      ]
  },

  {
    path: '/agents/',
    component: Fullwidth,
      children: [
        {
          path: 'notifications',
          name: 'agents-notifications',
          component: AgentNotifications

        }
      ]
  },

  {
    path: '/agents/',
    component: Fullwidth,
      children: [
        {
          path: 'profile',
          name: 'agents-profile',
          component: AgentProfile

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
  // buyers

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
