import { createApp } from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
import store from "./store"

import "@/styles/index.scss"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faCog, faChevronLeft, faChevronRight, faPaperPlane, faXmark } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

import VueSplide from "@splidejs/vue-splide"
import { i18n } from "./i18n"

library.add(faCog, faChevronLeft, faChevronLeft, faChevronRight, faPaperPlane, faLinkedin, faGithubSquare, faXmark)

createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .use(VueSplide)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app")
