<template>
  <div>
    <h4>Erkunde das Enneagram!</h4>
    <p>
      Um dich näher mit dem Enneagram zu beschäftigen, kannst Du bestimmte Elemente in der Grafik und Beschriftung über
      die Schaltflächten in diesem Menü ein- bzw. ausblenden.
    </p>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class IntroText extends Vue {}
</script>
<style lang="scss" scoped>
.enneagram svg {
  max-height: 40vh;
  max-width: 100%;
}
</style>
