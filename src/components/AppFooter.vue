<template>
  <footer class="small container fixed-bottom footer text-center">v{{ version }}</footer>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
// const appInfo = require("../../package.json")
import appInfo from "package.json"

@Component
export default class AppFooter extends Vue {
  get version() {
    return appInfo.version
  }
}
</script>
<style lang="scss" scoped>
.footer {
  padding: 15px;
}
</style>
