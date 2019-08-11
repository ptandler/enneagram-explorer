<template>
  <div
    :class="{
      showHelpers: showHelpers,
      hideHelpers: !showHelpers,
      showCenters: showCenters,
      hideCenters: !showCenters,
      showNumber1: showNumber(1),
      showNumber2: showNumber(2),
      showNumber3: showNumber(2),
      showNumber4: showNumber(2),
      showNumber5: showNumber(2),
      showNumber6: showNumber(2),
      showNumber7: showNumber(2),
      showNumber8: showNumber(2),
      showNumber9: showNumber(2),
      showPlusMinus: showPlusMinus,
      hidePlusMinus: !showPlusMinus,
      showArrowsIntegration: showArrowsIntegration,
      hideArrowsIntegration: !showArrowsIntegration,
      showArrowsDisintegration: showArrowsDisintegration,
      hideArrowsDisintegration: !showArrowsDisintegration,
      showAxes: showAxes,
      hideAxes: !showAxes,
      showSocialStyles: showSocialStyles,
      hideSocialStyles: !showSocialStyles,
    }"
  >
    <div class="tabs-container">
      <b-card no-body>
        <b-tabs v-model="tabIndex" pills fill card :vertical="useVerticalMenu" nav-class="tab-list">
          <b-tab title="Namen">
            <b-form-checkbox
              :id="'showName_' + ref"
              :key="ref"
              :value="ref"
              v-for="(name, ref) in names"
              v-model="showNames"
            >
              {{ references[ref].author }}
            </b-form-checkbox>
          </b-tab>
          <b-tab title="Elemente">
            <b-form>
              <!-- <b-form-checkbox id="showHelpers" v-model="showHelpers">Helpers</b-form-checkbox> -->
              <b-form-checkbox id="showCenters" v-model="showCenters"
                >3 Zentren / Triaden<!-- Centers --></b-form-checkbox
              >
              <b-form-checkbox id="showArrowsIntegration" v-model="showArrowsIntegration"
                >Entwicklungsrichtung<!--Direction of
                        integration-->
              </b-form-checkbox>
              <b-form-checkbox id="showArrowsDisintegration" v-model="showArrowsDisintegration">
                Verwicklungsrichtung<!--Direction of
                        disintegration-->
              </b-form-checkbox>
              <b-form-checkbox id="showSocialStyles" v-model="showSocialStyles">
                Sozialstil (&bdquo;Horney&rsquo;schen Gruppen&ldquo;)
                <Ref id="riso_hudson" page="S. 92" />
              </b-form-checkbox>
              <b-form-checkbox id="showAxes" v-model="showAxes">
                Achsen und Tendenzen
                <Ref id="reifarth" page="S. 227-231" />
              </b-form-checkbox>
            </b-form>
          </b-tab>
          <b-tab title="Eigenschaften">
            <h5>Leidenschaften</h5>
            <b-form-checkbox
              v-for="(emotion, ref) in emotions"
              :key="ref"
              :id="'showEmotion_' + ref"
              :value="ref"
              v-model="showEmotions"
            >
              {{ references[ref].author }}
            </b-form-checkbox>

            <h5>Weitere Eigenschaften</h5>
            <b-form-checkbox
              v-for="(content, ref) in contents"
              v-if="!content.showIf"
              :key="ref"
              :id="content.title"
              :value="content.title"
              v-model="showPlainContents"
            >
              {{ content.title }}
            </b-form-checkbox>
          </b-tab>
          <b-tab title="Typen">
            <b-form-checkbox v-for="i in 9" :id="'showNumber_' + i" :key="i" :value="i" v-model="showNumbers" inline>
              Nr. {{ i }}
            </b-form-checkbox>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
    <div class="content">
      <b-card no-body>
        <!-- information about the 3 centers -->
        <CenterInfoModal v-for="centerId in centerIds" :key="centerId" :centerId="centerId" />

        <!-- 3x3 grid as basis for the graphic and the boxes with description -->
        <b-row align-h="center">
          <b-col cols="12">
            <div class="enneagram">
              <EnneagramSvg />
            </div>
          </b-col>
          <b-col cols="12" sm="6" lg="4" v-for="i in 9" :key="i" v-show="showNumber(i)">
            <EnneaNumber
              :show-emotions="showEmotions"
              :show-names="showNames"
              :show-contents="showContents"
              :number="i"
            />
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import EnneagramSvg from "../assets/enneagram/Enneagram.svg"
import EnneaNumber from "./EnneaNumber.vue"
import names from "@/data/names"
import references from "@/data/references"
import { contents, emotions } from "@/data/contents"
import { centerIds } from "@/data/centers"
import Ref from "@/components/Ref.vue"
import CenterInfoModal from "@/components/CenterInfoModal.vue"

@Component({
  components: {
    EnneagramSvg,
    EnneaNumber,
    CenterInfoModal,
    Ref,
  },
})
export default class Enneagram extends Vue {
  public showHelpers = false
  public showCenters = true
  public showNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  public showPlusMinus = true
  public showArrowsIntegration = false
  public showArrowsDisintegration = false
  public showAxes = false
  public showSocialStyles = false
  public showNames = ["hurley_dobson"]
  public showEmotions = ["enneallionce"]
  public showPlainContents = ["Grundangst", "Grundbedürfnis"]
  public tabIndex = 1
  public useVerticalMenu = true

  public created() {
    // adjust the orientation of the tab list, depending on device orientation

    // https://stackoverflow.com/a/11734939/1480587
    // https://davidwalsh.name/orientation-change
    const mql = window.matchMedia("(orientation: portrait)")

    // If there are matches, we're in portrait
    this.useVerticalMenu = mql.matches // true if orientation: portrait
    // console.log("useVerticalMenu:", this.useVerticalMenu, " --- ", this)

    // Add a media query change listener
    mql.addListener((m) => {
      this.useVerticalMenu = mql.matches // true if orientation: portrait
      // console.log("useVerticalMenu:", this.useVerticalMenu, " --- ", this)
    })
  }

  public showNumber(n: number) {
    return this.showNumbers.indexOf(n) >= 0
  }

  get showContents() {
    const combinedContents: any = {
      showArrowsIntegration: this.showArrowsIntegration,
      showArrowsDisintegration: this.showArrowsDisintegration,
    }
    for (const key of this.showPlainContents) {
      combinedContents[key] = true
    }
    return combinedContents
  }

  // getters needed to make imported data available to template

  get centerIds() {
    return centerIds
  }

  get names() {
    return names
  }

  get references() {
    return references
  }

  get emotions() {
    return emotions
  }

  get contents() {
    return contents
  }

  // public created() {
  // }
}
</script>

<style lang="scss">
// all these imports needed to get the media-breakpoint-up mixin ...
@import "../scss/custom_variables";
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins/breakpoints";

.tabs-container,
.content {
  flex: 0 0 100%;
  max-width: 100%;
  width: 100%;
  overflow-x: hidden;
  display: inline-block;
  vertical-align: top;
}

.tabs-container {
  flex: 0 0 100%;
  max-width: 100%;

  .tab-list,
  .tab-content {
    max-height: 20vh;
    overflow-y: auto;
  }

  .card-header {
    padding: 0.3rem;
  }
  .nav-link {
    padding: 0.3rem 0.5rem;
  }
}

.enneagram svg {
  max-height: 40vh;
  max-width: 100%;
}

// when menu is to the side
@media (orientation: landscape) {
  .tabs-container {
    flex: 0 0 25%;
    max-width: 25%;

    .tab-list,
    .tab-content {
      max-height: none;
    }
  }

  .content {
    flex: 0 0 74%;
    max-width: 74%;
  }

  .enneagram svg {
    max-height: 75vh;
    max-width: 100%;
  }
}

// rules to show / hide parts of the Enneagram.svg

.showHelpers svg #layerHelpers {
  display: block !important;
}

.hideHelpers svg #layerHelpers {
  display: none !important;
}

.showCenters svg #centers,
.showCenters svg #plusMinus {
  display: block !important;
}

.hideCenters svg #centers,
.hideCenters svg #plusMinus {
  display: none !important;
}

.showArrowsIntegration svg #arrowsIntegration {
  display: block;
}

.hideArrowsIntegration svg #arrowsIntegration {
  display: none;
}

.showArrowsDisintegration svg #arrowsDisintegration {
  display: block;
}

.hideArrowsDisintegration svg #arrowsDisintegration {
  display: none;
}

// generate rules to show only elements for seleted numbers

@for $i from 1 through 9 {
  // per default hide all arrows, unless shown
  svg .number#{$i} {
    display: none;
  }

  // show arrow of show numbers
  .showNumber#{$i} svg .number#{$i} {
    display: inline;
  }
}

.showAxes svg #axes {
  display: block !important;
}

.hideAxes svg #axes {
  display: none !important;
}

.showSocialStyles svg #socialStyle {
  display: block !important;
}

.hideSocialStyles svg #socialStyle {
  display: none !important;
}
</style>
