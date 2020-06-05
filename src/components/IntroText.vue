<template>
  <b-container v-hammer:swipe.left="onSwipeLeft">
    <div class="info-content">
      <h4>Erkunde das Enneagramm!</h4>
      <div class="bg-enneagram">
        <EnneagramSvg />
      </div>
      <p>
        Diese Darstellung hier soll dazu dienen, verschiedene Aspekte anzuzeigen und in Verbindung bringen zu können und
        kann als
        <i>Ergänzung</i> zu anderen Quellen verwendet werden &ndash; denn um die Hintergründe wirklich verstehen zu
        können, genügen die hier aufgeführten Informationen ganz bestimmt nicht. Das soll auch nicht die Absicht sein.
        Hier möchte ich neben der Literatur auch empfehlen, ein Seminar zu besuchen.
      </p>
      <p>
        Die von mir verwendeten Quellen habe ich auf der
        <b-link to="/references">entsprechenden Seite</b-link>
        aufgeführt.
      </p>
      <h4>
        Hinweise zur Benutzung
      </h4>
      <p>
        Die Kern-Idee ist, dass man sich die Informationen zum Enneagramm ein- und ausblenden kann, um sich auf das
        konzentrieren zu können, was einen im Augenblick interessiert. In dem oberen bzw. linken (je nach Bildschirm
        größe / Ausrichtung) Bereich stehen dafür vier Kategorien zur Verfügung:
      </p>
      <dl class="dl-horizontal">
        <dt>Namen</dt>
        <dd>
          Die verschiedenen unter <b-link to="/references">Quellen</b-link> genannten Autoren verwenden z.T.
          unterschiedliche Namen für die 9 Typen des Enneagrams. In diesem Bereich kann man alle Autoren wählen, deren
          Namen angezeigt werden sollen.
        </dd>

        <dt>Elemente</dt>
        <dd>
          Hier kann man die Elemente auswählen, welche in der <em>Grafik</em> angezeigt werden sollen, insbesondere die
          fabliche Hervorhebung der 3 Zentren.
        </dd>

        <dt>Eigenschaften</dt>
        <dd>
          Unter dieser Rubrik kann man einige Erklärungstexte zu den einzelnen Enneagramm-Typen auswählen, die angezeigt
          werden sollen.
        </dd>

        <dt>Typen</dt>
        <dd>
          Und letztendlich kann man auch wählen, zu welchen Ennegramm-Typen überhaupt Erklärungstexte angezeigt werden.
        </dd>
      </dl>
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
export default class IntroText extends Vue {
  public onSwipeLeft() {
    this.$router.push("/enneagram")
  }
}
</script>
<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
// rules to show / hide parts of the Enneagram.svg

.info-content {
  min-height: 75vh;
}

.dl-horizontal {
  @include make-row(0);
  dt {
    @include make-col(2, 12);
  }
  dd {
    @include make-col(10, 12);
  }
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
