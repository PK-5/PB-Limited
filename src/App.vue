<template>
 <link rel="stylesheet" href="https://use.typekit.net/rqq8spz.css">

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        <RouterLink to="/">ome</RouterLink>
      </a>

      <a class="navbar-item">
        <RouterLink to="/bakery">Bakery</RouterLink>
      </a>

      <a class="navbar-item">
        <RouterLink to="/contact">Contact</RouterLink>
      </a>

    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <button
          v-if="storeAuth.user.id"
          @click="storeAuth.logoutUser"
            class="button is-small is-primary mt-3"
            id="logOutBtn"
          >
            Log Out {{ storeAuth.user.email }} 
          </button>
          <button 
          v-if="storeAuth.user.id"
          class="cartIconDiv">
            <RouterLink to="/shoppingCart"> <font-awesome-icon :icon="['fas', 'cart-shopping']" class="cartIcon"/></RouterLink>
          </button>
        </div>
      </div>
    </div>
  </div>
</nav>
  

  <RouterView />

  
<div class="footer"> 

<table class="links">
  <tr>
    <th class="webpages">Webpages</th>
    <th class="contactus">Contact us</th>
  </tr>
  <tr>
    <td class="webpages"><RouterLink to="/"> About </RouterLink></td>
    <td class="contactus">Email: providencebismithltd@gmail.com</td>
    <td > <font-awesome-icon icon="fa-envelope" class="iconfooter"  /></td>
  </tr>
  <tr>
    <td class="webpages"><RouterLink to="/bakery"> Products </RouterLink></td>
    <td class="contactus">Phone:0212647276 </td>
    <td> <font-awesome-icon icon="fa-phone" class="iconfooter"  /></td>
  </tr>
  <tr>
    <td class="webpages"><RouterLink to="/contact"> Contact </RouterLink></td>
    <td class="contactus" >Facebook: Providence Bismith</td>
    <td> <font-awesome-icon :icon="['fab', 'facebook']" class="iconfooter"  /></td>
  </tr>
  <th></th>  
  
</table>



</div> 
  
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useProducts} from '@/stores/products.js'
import { useShoppingCart } from './stores/cart'
import {useAuth} from '@/stores/Auth'

/*
store
*/

const Products = useProducts()
const shoppingCart = useShoppingCart()
const storeAuth =  useAuth()

/*
mounted
*/

onMounted (() => {

  Products.getProducts(),
  shoppingCart.getShoppingCart(),
  storeAuth.init()


}) 

</script>

<style >
/*import bulma */
@import 'C:\Users\princ\PBL\node_modules\bulma\css\bulma.min.css';

/* bluma navbar inactive colour */

/* Log out button colour */
#logOutBtn{
  background-color: #FFF9EF;
  color:#793D1A ;
  font-size: 20px;
  font-family: tornac, sans-serif;
  font-weight: 500;
  font-style: normal;
}

#logOutBtn:hover{
  transition: 0.5s;
  background-color:#793D1A ;
  color:#FFF9EF;
  
}

/* cart button */

.cartIconDiv{
  text-align: center;
  color: #793D1A;
  padding-top: 4%;
  padding-bottom: 4%;
  background-color: #FFF9EF;
  border-style: none;
  
}

.cartIconDiv:hover{
  transition: 0.5s;
  background-color:#793D1A ;
  color:#FFF9EF;
  
}

.cartIcon{
  color: #793D1A;
  font-size: 20px;
  }

.cartIcon:hover{
  transition: 0.5s;
  color:#FFF9EF;
  }



/*Navigation*/

nav {
  width: 100%;
  font-size: 60px;
  font-family: storybook, sans-serif;
  font-weight: 500;
  font-style: normal;
  text-align: center;
  margin-top: 2rem;
  background-image: url(@/components/bgrd.png);
  padding: 5px;
}

nav a.router-link-exact-active {
  color: #9E552A
}


nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: #000;
}

nav a:first-of-type {
  border: 0;
}



/*Footer*/

.footer{
    background-image: url(@/components/bgrd.png);
    width: 100%;
    padding:2%;
    padding-top: 6%;
    
}

.links{
    width: 100%;
    text-align: justify;
    
}

.iconfooter{
    font-size: 30px;
    font-size: 1.5vw;

}

.contactus{
    padding-left: 40%;
}

.webpages{
    padding-left: 5%;
}

th {
  font-weight: bold;
  
}

</style>