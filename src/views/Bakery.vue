<template>
  
 
  <div id="pgbody">
 
     
 <div >     
    
  <img id="logomain" src='@/components/officalLogo.png' alt="logo" >
 </div>
 
 <RouterLink to="/shoppingCart"> <font-awesome-icon :icon="['fas', 'cart-shopping']" /></RouterLink>
 <RouterView />
 
 
 <br>
 
 <hr id="middle">
 <br>
 
 <div class="product-card-grid">
       <div
         class="product-card"
         v-for="product in storeProducts.products"
         :key="product.id"
       >
         <img :src="product.img" alt="product image" class="product-image">
         <div class="name">{{ product.name }}</div>
         <div class="content">{{ product.description }}</div>
         <div class="price">{{ product.price }}</div>
         <footer>
           <a href="#" class="addToCart">Add to Cart</a>
         </footer>
       </div>
     </div>
     <br><br>
 
 </div>
 
 </template>
 
 <style>
 /* V-for product Card */
 
 .product-card-grid {
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(2, 1fr));
     gap: 20px;
   }
   
   .product-card {
     border: 1px solid #ccc;
     padding: 20px;
     background-color: white;
     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
     width: 100%;
   }
   
   .product-image {
     width: 100%;
     height: auto;
   }
   
   .name {
     font-weight: 500;
     font-size: 20px;
    
   }
   
   .content {
     margin-top: 10px;
     
   }
   
   .price {
     margin-top: 10px;
   }
   
   .addToCart {
     display: block;
     background-color: #FFF9EF;
     margin-top: 10px;
     text-align: center;
     color: #793D1A;
     text-decoration: none;
     padding: 5px 10px;
     border-radius: 5px;
     font-family: tornac, sans-serif;
     font-weight: 500;
     font-style: normal;
     font-size: 20px;
   }
 
   .addToCart:hover {
    background-color: #793D1A;
    color: #FFF9EF;
   }
 
 
 
 /* Products */
 

 
 #flex-container {
     display: flex;
     justify-content: center;
     align-items: center;
     width: 90%;
     margin-left: 5%;
   }
   
 
 
 
 #middle{
     width: 80%;
     margin: auto;
 }
 </style>
 
 
 <script setup>
   /* 
   imports 
   */
   
   import {ref,onMounted} from 'vue'
   import { useProducts } from '@/stores/products.js'
   import { RouterLink, RouterView } from 'vue-router'
   
   
   /*
   products
   */
   
   
   
   /* 
   store
   */
   
   const storeProducts = useProducts()
   
   /* Image */
   
   
   
 
 
 </script>