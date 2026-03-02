// Firebase configuration and initialization
// Replace the placeholder values with your actual Firebase project's settings.
// You can store these in environment variables (e.g. VITE_FIREBASE_API_KEY) and
// reference them via import.meta.env.

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "TU_API_KEY_REAL",
  authDomain: "reactirene.firebaseapp.com",
  projectId: "reactirene",
  storageBucket: "reactirene.appspot.com",
  messagingSenderId: "TU_SENDER_ID_REAL",
  appId: "TU_APP_ID_REAL"
}
console.log("Project ID que está usando la app:", firebaseConfig.projectId)
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)