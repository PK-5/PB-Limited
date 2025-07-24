import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../js/firebase'
import{useShoppingCart} from '@/stores/cart'
import Swal from 'sweetalert2'

export const useAuth = defineStore('Auth', {
state: () => {
  return{
    user:{}
  }
   
  },

actions:{

  init(){
    const storeShoppingCart = useShoppingCart()

    
//checking if the user is logged in and if not sent to the authentication page
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user.id= user.uid
        this.user.email = user.email
        this.router.push('/')
        storeShoppingCart.getShoppingCart() //gets the cart information
      } else {
        this.user = {}
        this.router.replace('/home')//changed this to navigate through website 24/07
        storeShoppingCart.clearCart() //clears the cart
      }
    })
  },
  
 //registering a user using authentication 
  registerUser(credentials){
    console.log('registerUser action',credentials)
    createUserWithEmailAndPassword(auth, credentials.email, credentials.password) 
    .then(async(userCredential) => {
    const user = userCredential.user
    Swal.fire('You have succesfully registered') 
  }).catch((error) => {
    Swal.fire(error.message.value)
    console.log('error.message:', error.message + error.code)
  })

  },
  //logging in a user using authenticaiton
  loginUser(credentials){    
  signInWithEmailAndPassword(auth, credentials.email, credentials.password) .then((userCredential) => {
    const user = userCredential.user
  })
  .catch((error) => {
    Swal.fire(error.message)
    console.log(error.message)
  });

  },

  //logging out user using authentication 

  logoutUser(){
    signOut(auth).then(() => {
    }).catch((error) => {
      console.log(error.message)
    });


  }
 
}

})
