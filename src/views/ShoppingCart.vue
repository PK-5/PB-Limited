<template>
   <link rel="stylesheet" href="https://use.typekit.net/rqq8spz.css">
     <div class="pgbody">
      <img class="logomain" src='@/components/officalLogo.png' alt="logo" >
      
     
 <div>
     
 
 </div>
 
 <RouterView />

 
 
 <h2 class="cartTitle"> Shopping cart </h2>
 <br>
 
 <hr id="middle">
 <br>


 
 <div class="product-card-grid-cart">
 <div
 class="product-card-cart"
 v-for="cart in storeShoppingCart.cart"
 :key="cart.id"
 >
 <img :src="cart.img" alt="product image" class="product-image-cart">
         <div class="name-cart">{{ cart.name }}</div>
         <div class="price-cart">{{ cart.price }}</div>
         <br>
         <div class="trash"><font-awesome-icon  icon="fa-solid fa-trash" @click="deleteProduct(cart)"/> </div>
         <div class="quantity-cart"> <div class="counter">
         <font-awesome-icon
            :icon="['fas', 'minus']"
            v-if="cart.quantity > 1"
            @click="downQuantity(cart)"
            class="minus"
          /> 
          {{ cart.quantity }}  
          <font-awesome-icon
            :icon="['fas', 'plus']"
            @click="upQuantity(cart)"
            class="plus"
          />
        </div>
        
      
    </div>
         <br>
        
      
       

 </div>
 </div>

 <div v-if="!storeShoppingCart.cart.length">

<h1 class="placeholder">no items added to your cart </h1>

</div>




 </div>
 <div class="gap"></div>

    
</template>

<script setup>
   /* 
   imports 
   */
   
   import { RouterLink, RouterView } from 'vue-router'
   import{useShoppingCart} from '@/stores/cart'
   import { ref } from 'vue'


   /* production information for deleting a product */

   const productToDelete = ref(null)

   const storeShoppingCart = useShoppingCart()

   const deleteProduct = (cart) => {
    productToDelete.value = cart
    storeShoppingCart.deleteProduct(productToDelete.value.id)

}

/* production information to increase or decrease quantity */
  
const product = ref(null)
const downQuantity = (cart) => {
    product.value = cart
    storeShoppingCart.downQuantity(product.value.id)

}

const upQuantity = (cart) => {
    product.value = cart
    storeShoppingCart.upQuantity(product.value.id)

}


 </script>

 <style>
 /*
 Page styling
 / */

 .cartTitle{
     padding-bottom: 2%;
     font-size: 60px;
     font-family: tornac, sans-serif;
     font-weight: 500;
     font-style: normal;
     color: #793D1A ;
     text-align: center;

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
     font-size: 120%;
     
   }
   
   .price-cart {
     padding-left: 25%;
     margin-top: 10px;
     font-weight: 500;
     font-size: 120%;
   }

   .minus{
    background-color: #793D1A;
    color: #FFF9EF;
    font-size: 120%;
    padding: 1%;
    margin-right: 2%;
    border-radius: 25%;
   }

   .plus{
    background-color: #793D1A;
    color: #FFF9EF;
    font-size: 120%;
    padding: 1%;
    margin-left: 2%;
    border-radius: 25%;
   }

   

   /* other */
   .gap{
    padding-bottom: 20%;
   }

   .trash{
    float: right;
    vertical-align: middle;
    color: #793D1A;
   }

   /*counter */

   .placeholder{
    color: #BB9C8A;
    font-size: 120%;
    text-align: center;
   }
   

</style>