<template>
     <div id="pgbody">
      <img id="logomain" src='@/components/officalLogo.png' alt="logo" >
      
     
 <div>
     
 
 </div>
 
 <RouterView />

 
 
 
 <br>
 
 <hr id="middle">
 <br>

 <h2 class="cartTitle"> My cart: </h2>
 
 <div class="product-card-grid-cart">
 <div
 class="product-card-cart"
 v-for="cart in storeShoppingCart.cart"
 :key="cart.id"
 >
 

 <img :src="cart.img" alt="product image" class="product-image-cart">
         <div class="name-cart">{{ cart.name }}</div>
         <div class="quantity-cart">{{ cart.quantity }}</div>
         <div class="price-cart">{{ cart.price }}</div>
 

 </div>
 </div>



 </div>
 <br><br><br><br>

    
</template>

<script setup>
   /* 
   imports 
   */
   
   import { RouterLink, RouterView } from 'vue-router'
   import{useShoppingCart} from '@/stores/cart'

   /*
   
   store

   */

   const storeShoppingCart = useShoppingCart()
   
   
  
   
   
   
 
 
 </script>

 <style>
 /*
 Page styling
 / */

 .cartTitle{
     padding-left: 10%;
     padding-bottom: 5%;
     font-size: 40px;
     font-family: tornac, sans-serif;
     font-weight: 500;
     font-style: normal;
     color: #793D1A ;

 }
 /* V-for product Card */
 
 .product-card-grid-cart {
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(2, 1fr));
     gap: 8%;
     padding-left: 10%;
   }
   
   .product-card-cart {
     border: 1px solid #ccc;
     padding: 20px;
     background-color: white;
     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
     width: 88%;
   
   }
   
   .product-image-cart {
     width: 20%;
     height: auto;
     float: left;
     border-radius: 25%;
   }
   
   .name-cart {
     padding-left: 25%;
     font-weight: 500;
     font-size: 20px;
    
   }
   
   .quantity-cart {
     padding-left: 25%;
     margin-top: 10px;
     
   }
   
   .price-cart {
     padding-left: 25%;
     margin-top: 10px;
   }


</style>