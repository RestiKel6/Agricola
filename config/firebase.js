import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
