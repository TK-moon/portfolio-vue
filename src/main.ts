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

createApp(App)
	.use(store)
	.use(router)
	.component("font-awesome-icon", FontAwesomeIcon)
	.mount("#app")
