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
        <RouterLink to="/">Home</RouterLink>
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
        </div>
      </div>
    </div>
  </div>
</nav>
  

  <RouterView />

  
<div id="footer"> 

<table id="links">
  <tr>
    <th id="webpages">Webpages</th>
    <th id="contactus">Contact us</th>
  </tr>
  <tr>
    <td id="webpages"><RouterLink to="/"> About </RouterLink></td>
    <td id="contactus">Email: providencebismithltd@gmail.com</td>
    <td > <font-awesome-icon icon="fa-envelope" id="iconfooter"  /></td>
  </tr>
  <tr>
    <td id="webpages"><RouterLink to="/bakery"> Products </RouterLink></td>
    <td id="contactus">Phone:0212647276 </td>
    <td> <font-awesome-icon icon="fa-phone" id="iconfooter"  /></td>
  </tr>
  <tr>
    <td id="webpages"><RouterLink to="/contact"> Contact </RouterLink></td>
    <td id="contactus" >Facebook: Providence Bismith</td>
    <td> <font-awesome-icon :icon="['fab', 'facebook']" id="iconfooter"  /></td>
  </tr>
  <th></th>  
  
</table>



</div> 
  
</template>

<style >
/*import bulma */
@import 'C:\Users\princ\PBL\node_modules\bulma\css\bulma.min.css';

/* bluma navbar inactive colour */

/* Log out button colour */
#logOutBtn{
  background-color: #FFF9EF;
  color: #793D1A;
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

/*Nav Bar real */

.fa-bars {
    font-size: 30px;
    font-size: 2vw;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    text-decoration: none;
    color: #333;  
    font-weight: 100; 
    position: absolute;
    left: 30px;
    top: 20px;

    

}

#navbody { 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    min-height: 100vh; 
    position:fixed;
    width: 100%;
    z-index: 1;
    overflow: hidden; 
} 

#navigation { 
    position: relative; 
    
}

#navigation a{ 
    list-style: none; 
    text-align: center;    
} 

#navigation a { 
    color: #333; 
    text-decoration: none; 
    font-size: 3em; 
    font-size: 4vw;
    padding: 5px 20px; 
    display: inline-flex; 
    font-weight: 200; 
    transition: 0.5s; 
} 

#navigation :hover a { 
    color: #0002; 
} 

#navigation :hover a { 
    color: #000; 
    background: rgba(255,255,255,1); 
} 

#navigation a:before { 
    content: ''; 
    position: absolute; 
    top: 50%; 
    left: 40%; 
    transform: translate(-50%,-50%); 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    font-size: 4em;
    color: rgba(0,0,0,.1); 
    border-radius: 50%; 
    z-index: -1; 
    opacity: 0; 
    font-weight: 900; 
    text-transform: uppercase; 
    letter-spacing: 500px; 
    transition: letter-spacing 0.5s,left 0.5s; 
} 

#navigation a:hover:before { 
    content: attr(data-text); 
    opacity: 1; left: 50%; 
    letter-spacing: 10px; 
    width: 1800px; 
    height: 1800px; 
} 

#home:before { 
    background: #E1C3ED; 
} 

#bakery:before { 
    background: #ECC7C8; 
}

#honey:before { 
    background: #C3DAED; 
} 

#contact:before { 
    background: #DCEDC3; 
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

#footer{
    background-image: url(@/components/bgrd.png);
    width: 100%;
    padding:2%;
    
}

#links{
    width: 100%;
    text-align: justify;
    
}

#iconfooter{
    font-size: 30px;
    font-size: 1.5vw;

}

#contactus{
    padding-left: 40%;
}

#webpages{
    padding-left: 5%;
}

th {
  font-weight: bold;
  
}

</style>

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
