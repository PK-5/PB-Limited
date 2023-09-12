<template>
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
          <a href="#" class="card-footer-item">Add to Cart</a>
        </footer>
      </div>
    </div>
  </template>
  
  <style>
  .product-card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .product-card {
    border: 1px solid #ccc;
    padding: 20px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .product-image {
    max-width: 100%;
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
  
  .card-footer-item {
    display: block;
    background-color: palevioletred;
    margin-top: 10px;
    text-align: center;
    color: white;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 5px;
  }
  </style>
  
  <script setup>


  /* 
  imports 
  */
  
  import {ref,onMounted} from 'vue'
  import { useProducts } from '@/stores/products.js'
  
  
  /*
  products
  */
  
  
  
  /* 
  store
  */
  
  const storeProducts = useProducts()
  
  /* Image */
  
  
  
  
  
  
  </script>