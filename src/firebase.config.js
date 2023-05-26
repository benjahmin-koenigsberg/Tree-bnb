import {getFirestore} from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtYpA-psDkSH16jT1Xx_ghhVFhDuBbK30",
  authDomain: "house-marketplace-app-a1662.firebaseapp.com",
  projectId: "house-marketplace-app-a1662",
  storageBucket: "house-marketplace-app-a1662.appspot.com",
  messagingSenderId: "1026989652488",
  appId: "1:1026989652488:web:dccbe819d6e7cb1ba96fbd",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
