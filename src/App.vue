<template>
  <b-container id="app">
    <h1>Enneagramm Explorer</h1>
    <Enneagram />
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Enneagram from "./components/Enneagram.vue"
import BootstrapVue from "bootstrap-vue"
import "./scss/custom.scss"

Vue.use(BootstrapVue)

@Component({
  components: {
    Enneagram,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
