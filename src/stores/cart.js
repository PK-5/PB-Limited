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

    //getShopping cart function that takes a snapshot of the database annd stores the variable cartProduct in the cart array which is then pushed to the cart array in the state which is shown on the shopping cart page
 
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

//clears the cart 
    },
    clearCart() {
      this.cart = []
    },
  
//adds a product to the cart, it is able to identify the product through the parameter that has been passed through, a unique id is produced and the product is added to the cart using  setDoc 
  async addProduct(selectedProduct){
    const storeAuth =  useAuth()
    let addProduct = {
      id:uuidv4(),
      img: selectedProduct.img,
      name:selectedProduct.name,
      price: selectedProduct.price,
      quantity: '1',
      
    }


await setDoc(doc(db, 'users',storeAuth.user.id,'cart', addProduct.id), {
       img: selectedProduct.img,
      name:selectedProduct.name,
      price: selectedProduct.price,
      quantity: '1',
})

  },

  //deletes a product form the cart using deleteDoc

  async deleteProduct(productID){
    const storeAuth =  useAuth()
  await deleteDoc(doc(db, 'users',storeAuth.user.id,'cart', productID))
  },

  //increases and decreases the quantity of a product in the cart using updateDoc
  
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