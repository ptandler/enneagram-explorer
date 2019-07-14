import Vue from "vue"
import App from "./App.vue"
import "./registerServiceWorker"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faTshirt, faHeart, faSmile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon /*, FontAwesomeLayers, FontAwesomeLayersText*/ } from "@fortawesome/vue-fontawesome"

library.add(faTshirt, faHeart, faSmile)

Vue.component("font-awesome-icon", FontAwesomeIcon)
// Vue.component('font-awesome-layers', FontAwesomeLayers)
// Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount("#app")
