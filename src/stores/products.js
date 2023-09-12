import { ref, computed, onMounted, onBeforeMount } from 'vue'
import { defineStore } from 'pinia'
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../js/firebase'
import { getStorage, ref as firebaseRef, getDownloadURL } from "firebase/storage";


export const useProducts = defineStore('Products', {
state: () => ({
    products: [
    
    ],

    imageUrl: ref(null)
  }),



actions:{
 
  async getProducts(){
onSnapshot(collection(db, 'products'), (querySnapshot) => {
  let products = []
  querySnapshot.forEach((doc) => {
    let product = {
      name: doc.data().name,
      price: doc.data().price,
      description: doc.data().description,
      img: doc.data().img
    }
   products.push(product)
  });
  this.products = products
  console.log(products);
  
  
})

  }



}

})
