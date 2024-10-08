// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "flashcard-9927f.firebaseapp.com",
  projectId: "flashcard-9927f",
  storageBucket: "flashcard-9927f.appspot.com",
  messagingSenderId: "1053177244827",
  appId: "1:1053177244827:web:278818f1891a1b8b16ea3e",
  measurementId: "G-YXC0RQD25G"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}