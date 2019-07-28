<template>
  <b-container id="app" fluid>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/enneagram">Enneagramm-Explorer</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Intro</b-nav-item>
          <b-nav-item to="/enneagram">Enneagramm</b-nav-item>
          <b-nav-item to="/references">Quellen</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 3px;
}
</style>
