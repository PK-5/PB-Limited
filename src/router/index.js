import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Bakery from '../views/Bakery.vue'
import Honey from '../views/Honey.vue'
import Contact from '../views/Contact.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import Test from '../views/Test.vue'
import Auth from '../views/Auth.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/bakery',
      name: 'bakery',
      component:Bakery
    },
    {
      path: '/honey',
      name: 'honey',
      component:Honey
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: ShoppingCart
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    }
    

  ]
})

export default router
