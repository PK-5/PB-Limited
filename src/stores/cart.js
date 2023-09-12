import { ref, computed, onMounted, onBeforeMount } from 'vue'
import { defineStore } from 'pinia'
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../js/firebase'
import { getStorage, ref as firebaseRef, getDownloadURL } from "firebase/storage";


export const useCart = defineStore('cart', {
state: () => ({
    cart: [

    ],

    imageUrl: ref(null)
  }),



actions:{
 
    async cartProducts(){
        onSnapshot (collection(db, 'users', 'AURv3Uo0u6Xqi2ZEOuWofdO14R13','cart'), (querySnapshot) => {
            let cart = []
            querySnapshot.forEach((doc) => {
              let cartProduct = {
                name: doc.data().name,
                price: doc.data().price,
                img:doc.data().img,
                quantity: doc.data().quantity
              }
             cart.push(cartProduct)
            });
            this.cart = cart
            console.log(cart);
            
            
          })
      }



}

})
