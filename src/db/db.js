import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCEAnVzL7ohN-668DMv7Mw11TuzocY9MVk",
  authDomain: "reactirene.firebaseapp.com",
  projectId: "reactirene",
  storageBucket: "reactirene.firebasestorage.app",
  messagingSenderId: "356979891119",
  appId: "1:356979891119:web:563e797a49387e9025ad5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export default db;