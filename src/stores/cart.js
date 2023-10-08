import { ref, computed, onMounted, onBeforeMount } from 'vue'
import { defineStore } from 'pinia'
import { collection, onSnapshot, getDocs } from 'firebase/firestore';
import { db } from '../js/firebase'
import { getStorage, ref as firebaseRef, getDownloadURL } from "firebase/storage";


export const useShoppingCart = defineStore('shoppingCart', {
  state: () => {
    return { 
      cart: []
     }
  },
  actions:{
    async getShoppingCart(){
      const querySnapshot = await getDocs(collection(db, 'users','AURv3Uo0u6Xqi2ZEOuWofdO14R13','cart'))
      querySnapshot.forEach((doc) => {

      let cartProduct = {
        id: doc.id,
        img: doc.data().img,
        name: doc.data().name,
        quantity: doc.data().quantity,
        price: doc.data().price
      }
      this.cart.push(cartProduct)
});
    }
  }

})