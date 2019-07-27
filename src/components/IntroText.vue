<template>
  <div>
    <h5>Erkunde das Enneagram!</h5>
    <p>
      Um dich näher mit dem Enneagram zu beschäftigen, kannst Du bestimmte Elemente in der Grafik und Beschriftung über
      die Schaltflächten in diesem Menü ein- bzw. ausblenden.
    </p>
    <p>
      Diese Darstellung hier soll dazu dienen, verschiedene Aspekte anzuzeigen und in Verbindung bringen zu können und
      kann als <i>Ergänzung</i> zu anderen Quellen verwendet werden &ndash; denn um die Hintergründe wirklich verstehen
      zu können, genügen die hier aufgeführten Informationen ganz bestimmt nicht. Das soll auch nicht die Absicht sein.
    </p>
    <p>
      Die von mir verwendeten Quellen habe ich in dem
      <a href="#" @click="$emit('show-tab-ref')">entsprechenden Reiter</a> aufgeführt.
    </p>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

@Component
export default class IntroText extends Vue {}
</script>
