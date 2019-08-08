import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import "./registerServiceWorker"
import IntroText from "@/components/IntroText.vue"
import Enneagram from "@/components/Enneagram.vue"
import References from "@/components/References.vue"
import BootstrapVue from "bootstrap-vue"
import "@/scss/custom.scss"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faTshirt, faHeart, faSmile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon /*, FontAwesomeLayers, FontAwesomeLayersText*/ } from "@fortawesome/vue-fontawesome"

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.component("font-awesome-icon", FontAwesomeIcon)
// Vue.component('font-awesome-layers', FontAwesomeLayers)
// Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
library.add(faTshirt, faHeart, faSmile)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: "/", component: IntroText },
    { path: "/enneagram", component: Enneagram },
    { path: "/references", component: References },
  ],
})
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app")
