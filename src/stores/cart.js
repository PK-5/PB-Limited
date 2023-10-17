import { ref, computed, onMounted, onBeforeMount } from 'vue'
import { defineStore } from 'pinia'
import { collection, onSnapshot, doc, setDoc , deleteDoc, increment, updateDoc} from 'firebase/firestore';
import { db } from '../js/firebase'
import { getStorage, ref as firebaseRef, getDownloadURL } from "firebase/storage";
import {useAuth} from '@/stores/Auth'
import { v4 as uuidv4 } from 'uuid'



export const useShoppingCart = defineStore('shoppingCart', {
  state: () => {
    return { 
      cart: []
     }
  },
  actions:{
    
    async getShoppingCart(){
      const storeAuth =  useAuth()
      onSnapshot(collection(db, 'users',storeAuth.user.id,'cart'), (querySnapshot) => {
      let cart = []
      querySnapshot.forEach((doc) => {
    let cartProduct = {
      id: doc.id,
      img: doc.data().img,
      name: doc.data().name,
      quantity: doc.data().quantity,
      price: doc.data().price
    }
   cart.push(cartProduct)
  })
  this.cart = cart


})
    },
    clearCart() {
      this.cart = []
    },
  

  async addProduct(selectedProduct){
    const storeAuth =  useAuth()
    console.log('addProduct', selectedProduct)

    let addProduct = {
      id:uuidv4(),
      img: selectedProduct.img,
      name:selectedProduct.name,
      price: selectedProduct.price,
      quantity: '1',
      
    }

   // this.cart.unshift(addProduct)

await setDoc(doc(db, 'users',storeAuth.user.id,'cart', addProduct.id), {
       img: selectedProduct.img,
      name:selectedProduct.name,
      price: selectedProduct.price,
      quantity: '1',
})

  },

  async deleteProduct(productID){
    const storeAuth =  useAuth()
  await deleteDoc(doc(db, 'users',storeAuth.user.id,'cart', productID))
  },
  
  async upQuantity(productID){
    const storeAuth =  useAuth()
await updateDoc(doc(db, 'users',storeAuth.user.id,'cart', productID), {
    quantity: increment(1)
})
  },

  async downQuantity(productID){
    const storeAuth =  useAuth()
await updateDoc(doc(db, 'users',storeAuth.user.id,'cart', productID), {
    quantity: increment(-1)
})
  }



    
    
  }

})


  /* async addProduct(){
    await setDoc(doc(db, 'users',storeAuth.user.id,'cart', uuidv4), { 
      img: newCartProduct.img ,
      name: newCartProduct.name,
      quantity: newCartProduct.quantity ,
      price: newCartProduct.price
    })
  }
  */ 