import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: 'AIzaSyBNaa53rykHUNt-vJU-p9-yZA3gVVmRmek',
  authDomain: 'pbl-9f1dd.firebaseapp.com',
  projectId: 'pbl-9f1dd',
  storageBucket: 'pbl-9f1dd.appspot.com',
  messagingSenderId: '084312882031',
  appId: '1:1084312882031:web:c6e36dc88b0f1c15c2769a'
};


const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
const auth = getAuth(app);

export{
  db,
  firebaseConfig,
  auth
}