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
    <router-view v-hammer:pinchstart="onPinchStart" v-hammer:pinch="onPinch" :style="scaleStyle" />
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class App extends Vue {
  /** current scale factor for font-size */
  protected scale = 1.0

  /** scale factor for font-size before an ongoing pinch gesture was started */
  protected startScale = 1.0

  protected get scaleStyle() {
    return {
      "font-size": this.scale * 100 + "%",
    }
  }

  public onPinchStart(event: any) {
    // remember the scale when we started a pinch gesture action (finger down)
    this.startScale = this.scale
    // console.log("***start!", event, event.scale, this.scale)
  }

  public onPinch(event: any) {
    // adjust the scale relative to the scale when the gesture started
    this.scale = Math.max(0.5, Math.min(this.startScale * event.scale, 8))
    // console.log("pinch", event, event.scale, this.scale)
  }
}
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
