<template>
  <b-container id="app" fluid>
    <b-navbar toggleable="sm" type="dark" variant="primary">
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
@import "scss/custom_variables";
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins/breakpoints";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 0;
  padding: 0;
}

// bootstrap overwrites

.container {
  margin-top: 2rem;
}

@include media-breakpoint-down(xs) {
  .navbar-brand {
    font-size: 1.1rem !important;
  }
}
</style>
