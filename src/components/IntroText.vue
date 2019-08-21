<template>
  <b-container>
    <div class="info-content">
      <h5>Erkunde das Enneagramm!</h5>
      <div class="bg-enneagram">
        <EnneagramSvg />
      </div>
      <p>
        Um Dich näher mit dem Enneagramm zu beschäftigen, kannst Du bestimmte Elemente in der Grafik und Beschriftung
        über die Schaltflächten in diesem Menü ein- bzw. ausblenden.
      </p>
      <p>
        Diese Darstellung hier soll dazu dienen, verschiedene Aspekte anzuzeigen und in Verbindung bringen zu können und
        kann als
        <i>Ergänzung</i> zu anderen Quellen verwendet werden &ndash; denn um die Hintergründe wirklich verstehen zu
        können, genügen die hier aufgeführten Informationen ganz bestimmt nicht. Das soll auch nicht die Absicht sein.
      </p>
      <p>
        Die von mir verwendeten Quellen habe ich auf der
        <b-link to="/references">entsprechenden Seite</b-link>
        aufgeführt.
      </p>
      <p>
        <b-button to="/enneagram">Weiter zum Enneagramm</b-button>
      </p>
      <small>
        <p>
          Über Feedback, Vorschläge, Fehlerhinweise und Anregungen freue ich mich auf der
          <b-link href="https://github.com/ptandler/enneagram-explorer/issues" target="_blank">GitHub Seite</b-link>
          .
        </p>
        <p>
          Wer mithelfen möchte, die App weiterzuentwickeln: Die Sourcen stehen ebenfalls auf
          <b-link href="https://github.com/ptandler/enneagram-explorer/" target="_blank">GitHub</b-link>
          und Beiträge sind herzlich willkommen.
        </p>
      </small>
    </div>
    <app-footer />
  </b-container>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import EnneagramSvg from "../assets/enneagram/Enneagram.svg"
import AppFooter from "./AppFooter.vue"

@Component({
  components: {
    EnneagramSvg,
    AppFooter,
  },
})
export default class IntroText extends Vue {}
</script>
<style lang="scss">
// rules to show / hide parts of the Enneagram.svg

.info-content {
  min-height: 75vh;
}

.bg-enneagram {
  text-align: center;

  svg {
    width: 80%;
    height: 30vh;

    #layerHelpers,
    #centers,
    #plusMinus,
    #arrowsIntegration,
    #arrowsDisintegration,
    #axes,
    #socialStyle {
      display: none !important;
    }
  }
}

@media (orientation: landscape) {
  .bg-enneagram {
    float: right;
    width: 20vw;
    text-align: right;

    svg {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
