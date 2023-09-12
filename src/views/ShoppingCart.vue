<template>
     <div id="pgbody">
 
     
 <div id="logo">
     
    
     <div id="flex-container">
       <div><img id="headerbake" src="@/components/headerCart.png" alt="logo" width="100%"> </div>
       <div> <img id="logo" src="@/components/logoCart.png" alt="logo" width="90%" ></div>
       <div><img id="headerbake" src="@/components/headerCart.png" alt="logo" width="100%" ></div>
     </div>
 
 </div>
 
 <RouterView />
 
 
 <br>
 
 <hr id="middle">
 <br>

 <div class="product-card-grid">
       <div
         class="product-card"
         v-for="cartProduct in storeCart.cart"
         :key="cartProduct.id"
       >
         <img :src="cartProduct.img" alt="product image" class="product-image">
         <div class="name">{{ cartProduct.name }}</div>
         <div class="content">{{ cartProduct.quantity }}</div>
         <div class="price">{{ cartProduct.price }}</div>

       </div>
     </div>
     <br><br>
 
 </div>

    
</template>

<script setup>
   /* 
   imports 
   */
   
   import { useCart} from '@/stores/cart.js'
   import { RouterLink, RouterView } from 'vue-router'
   
   
   /*
   products
   */
   
   
   
   /* 
   store
   */
   
   const storeCart = useCart()
   
   /* Image */
   
   
   
 
 
 </script>

 <style>


</style>