// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDMt2CPjsSgOKQtySZNyGrfx9Hv-ILbwM",
  authDomain: "reacteduureta.firebaseapp.com",
  projectId: "reacteduureta",
  storageBucket: "reacteduureta.appspot.com",
  messagingSenderId: "610412722538",
  appId: "1:610412722538:web:4485d786e50068eb23cd13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Me da una referencia a una BD de mi proyecto app
export const db = getFirestore(app)