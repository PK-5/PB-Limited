<template>
  
 
  <div id="pgbody">
 
     
 <div >     
    
  <img class="logomain" src='@/components/officalLogo.png' alt="logo" >
 </div>
 

 
 <h2 class="cartTitle"> Bakery </h2>

 <br>
 
 <hr class="middle">
 <br>
 
 <div class="product-card-grid">
       <div 
         class="product-card"
         v-for="product in storeProducts.products"
         :key="product.id"
         :product = "product"
       >
         <img :src="product.img" alt="product image" class="product-image">
         <div class="name">{{ product.name }}</div>
         <div class="content">{{ product.description }}</div>
         <div class="price">{{ product.price }}</div>
         <footer>
           <a href="#" class="addToCart" @click="addToCart(product)">Add to Cart</a>
         </footer>
       </div>
     </div>
     <br><br>
 
 </div>
 
 </template>
 
 <script setup>
   /* 
   imports 
   */
   
   import {ref,onMounted} from 'vue'
   import { useProducts } from '@/stores/products.js'
   import { useShoppingCart } from '@/stores/cart.js'
    import Swal from 'sweetalert2';
   
   
   
   /* 
   store
   */
   
   const storeProducts = useProducts()
   const storeShoppingCart = useShoppingCart()
   
   /* cart */
   
    /* import uuid */


  const selectedProduct = ref(null)

   const addToCart = (product) => {
    selectedProduct.value = product
    storeShoppingCart.addProduct(selectedProduct.value)
    Swal.fire({
      title: 'product added to cart',
      showConfirmButton: false,
      timer: 1000,
      position: 'bottom-end',
})
}
 
 
 </script>

 
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
    border-radius: 25%;
  }
  
  .name {
    font-weight: 500;
    font-size: 20px;
    color: #793D1A ;
   
  }
  
  .content {
    margin-top: 10px;
    
  }
  
  .price {
    margin-top: 10px;
    color: #793D1A ;
    font-size: 130%;
    font-weight: 500;
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

.middle{
    width: 80%;
    margin: auto;
    background-color: #793D1A ;
}
</style>
