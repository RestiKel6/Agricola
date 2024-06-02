// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFLX87OpekA2XO-F5gX2LRhZ9bkzMOHwk",
  authDomain: "agricola-aa38f.firebaseapp.com",
  databaseURL: "https://agricola-aa38f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "agricola-aa38f",
  storageBucket: "agricola-aa38f.appspot.com",
  messagingSenderId: "730144733230",
  appId: "1:730144733230:web:4db60588a08dc64c0a07bf",
  measurementId: "G-Z4BLJXGX6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };