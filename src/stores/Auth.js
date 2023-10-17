import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../js/firebase'
import{useShoppingCart} from '@/stores/cart'


export const useAuth = defineStore('Auth', {
state: () => {
  return{
    user:{}
  }
   
  },

actions:{

  init(){
    const storeShoppingCart = useShoppingCart()

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user.id= user.uid
        this.user.email = user.email
        this.router.push('/')
        storeShoppingCart.getShoppingCart()
      } else {
        this.user = {}
        this.router.replace('/auth')
        storeShoppingCart.clearCart()
      }
    })
  },
  
 
  registerUser(credentials){
    console.log('registerUser action',credentials)
    createUserWithEmailAndPassword(auth, credentials.email, credentials.password) 
    .then(async(userCredential) => {
    const user = userCredential.user
  }).catch((error) => {
    console.log('error.message:', error.message + error.code)
  })

  },
  loginUser(credentials){    
  signInWithEmailAndPassword(auth, credentials.email, credentials.password) .then((userCredential) => {
    const user = userCredential.user
    //console.log('user:', user);
  })
  .catch((error) => {
    //console.log(error.message);
  });

  },

  logoutUser(){
    signOut(auth).then(() => {
      //console.log('User signed out');
    }).catch((error) => {
      //console.log(error.message);
    });


  }
 
}

})
