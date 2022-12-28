import dotenv from "dotenv"
dotenv.config()

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: "tkmoon-dev-portfolio.firebaseapp.com",
  projectId: "tkmoon-dev-portfolio",
  storageBucket: "tkmoon-dev-portfolio.appspot.com",
  messagingSenderId: "371331691401",
  appId: "1:371331691401:web:f0b2efeabcb229b1446758",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// init firestore service
const db = getFirestore(app)
export default db
