import Vue from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import IntroText from "@/components/IntroText.vue"
import Enneagram from "@/components/Enneagram.vue"
import References from "@/components/References.vue"
import "@/scss/custom.scss"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHandPaper, /*faTshirt,*/ faHeart, faSmile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon /*, FontAwesomeLayers, FontAwesomeLayersText*/ } from "@fortawesome/vue-fontawesome"

import BootstrapVue from "bootstrap-vue"

Vue.use(BootstrapVue)

import VueRouter from "vue-router"

Vue.use(VueRouter)

Vue.component("font-awesome-icon", FontAwesomeIcon)
// Vue.component('font-awesome-layers', FontAwesomeLayers)
// Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
library.add(faHandPaper, /*faTshirt,*/ faHeart, faSmile)

import { VueHammer } from "vue2-hammer"
/*
VueHammer.config = {
  pinch: {
  },
}
*/
Vue.use(VueHammer)

// no idea how I could set the global options in VueHammer ...
import Hammer from "hammerjs"
// set the touchAction to pan-y to ensure that we still can scroll on the page (via brwoser)
Hammer.defaults.touchAction = "pan-y"
// domEvents must be enabled to use preventPropagation() with touch events https://stackoverflow.com/a/39103630/1480587
Hammer.defaults.domEvents = true
// and only define the recognizers that are really used
Hammer.defaults.preset = [
  // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
  // [RotateRecognizer, {enable: false}],
  [Hammer.Pinch, { enable: true }],
  [Hammer.Swipe, { enable: true, direction: Hammer.DIRECTION_HORIZONTAL }],
  // [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
  // [TapRecognizer],
  // [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
  // [PressRecognizer]
]

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
