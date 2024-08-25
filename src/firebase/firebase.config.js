// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; // Import getAuth from firebase/auth
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwCvHD4USVPI_6ZUCNwMi6Y-faqd7CxgY",
  authDomain: "bridal-df93c.firebaseapp.com",
  projectId: "bridal-df93c",
  storageBucket: "bridal-df93c.appspot.com",
  messagingSenderId: "996189862256",
  appId: "1:996189862256:web:bab3ec52aabef8fbc3b7b5",
  measurementId: "G-8N6PWB6700"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;