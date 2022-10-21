import { createApp } from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
import store from "./store"

import "@/styles/index.scss"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faCog } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(faCog)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMF7y3qWrqURQ8uSNHoCJ96jiGb-b8FUI",
  authDomain: "portfolio-9d477.firebaseapp.com",
  projectId: "portfolio-9d477",
  storageBucket: "portfolio-9d477.appspot.com",
  messagingSenderId: "930006453501",
  appId: "1:930006453501:web:b6cdd1ce3d91b31f4c8294",
  measurementId: "G-0DP3KHFXMN",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
getAnalytics(app)

createApp(App).use(store).use(router).component("font-awesome-icon", FontAwesomeIcon).mount("#app")
