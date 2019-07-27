<template>
  <b-row
    :class="{
      showHelpers: showHelpers,
      hideHelpers: !showHelpers,
      showCenters: showCenters,
      hideCenters: !showCenters,
      showNumbers: showNumbers,
      hideNumbers: !showNumbers,
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
    <b-card no-body class="col-lg-3 tabs-container">
      <b-tabs v-model="tabIndex" vertical pills fill card>
        <b-tab title="Enneagramm">
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
              Sozialstil (&bdquo;Horney&rsquo;schen Gruppen&ldquo;) </b-form-checkbox
            ><Ref id="riso_hudson" page="S. 92" v-on:show-tab-ref="showTabRef()" />
            <b-form-checkbox id="showAxes" v-model="showAxes">
              Achsen und Tendenzen
            </b-form-checkbox>
          </b-form>
        </b-tab>
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
        <b-tab title="Eigenschaften">
          <h5>Leidenschaften</h5>
          <b-form-checkbox
            :id="'showEmotion_' + ref"
            :key="ref"
            :value="ref"
            v-for="(emotion, ref) in emotions"
            v-model="showEmotions"
          >
            {{ references[ref].author }}
          </b-form-checkbox>
        </b-tab>
      </b-tabs>
    </b-card>
    <b-card class="col-lg-9 content">
      <!-- information about the 3 centers -->
      <CenterInfoModal v-for="centerId in centerIds" :key="centerId" :centerId="centerId" />

      <!-- 3x3 grid as basis for the graphic and the boxes with description -->
      <b-row align-h="center">
        <b-col cols="3">
          <EnneaNumber
            :show-emotions="showEmotions"
            :show-names="showNames"
            v-on:show-tab-ref="showTabRef()"
            number="8"
          />
        </b-col>
        <b-col cols="3">
          <EnneaNumber
            :show-emotions="showEmotions"
            :show-names="showNames"
            v-on:show-tab-ref="showTabRef()"
            number="9"
          />
        </b-col>
        <b-col cols="3">
          <EnneaNumber
            :show-emotions="showEmotions"
            :show-names="showNames"
            v-on:show-tab-ref="showTabRef()"
            number="1"
          />
        </b-col>
      </b-row>
      <b-row align-v="center">
        <b-col cols="3">
          <EnneaNumber
            :show-emotions="showEmotions"
            :show-names="showNames"
            v-on:show-tab-ref="showTabRef()"
            number="7"
          />
          <br />
          <EnneaNumber
            :show-emotions="showEmotions"
            :show-names="showNames"
            v-on:show-tab-ref="showTabRef()"
            number="6"
          />
          <br />
          <EnneaNumber
            :show-emotions="showEmotions"
            :show-names="showNames"
            v-on:show-tab-ref="showTabRef()"
            number="5"
          />
        </b-col>
        <b-col cols="6">
          <div class="enneagram">
            <EnneagramSvg />
          </div>
        </b-col>
        <b-col cols="3">
          <EnneaNumber
            :show-emotions="showEmotions"
            :show-names="showNames"
            v-on:show-tab-ref="showTabRef()"
            number="2"
          />
          <br />
          <EnneaNumber
            :show-emotions="showEmotions"
            :show-names="showNames"
            v-on:show-tab-ref="showTabRef()"
            number="3"
          />
          <br />
          <EnneaNumber
            :show-emotions="showEmotions"
            :show-names="showNames"
            v-on:show-tab-ref="showTabRef()"
            number="4"
          />
        </b-col>
      </b-row>
    </b-card>
  </b-row>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import EnneagramSvg from "../assets/enneagram/Enneagram.svg"
import EnneaNumber from "./EnneaNumber.vue"
import names from "@/data/names"
import references from "@/data/references"
import { emotions } from "@/data/contents"
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
  public showNumbers = true
  public showPlusMinus = true
  public showArrowsIntegration = false
  public showArrowsDisintegration = false
  public showAxes = false
  public showSocialStyles = false
  public showNames = ["hurley_dobson"]
  public showEmotions = ["riso_hudson"]
  public tabIndex = 1

  // switch to the "references" tab
  public showTabRef() {
    this.tabIndex = 4
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

  // public created() {
  // }
}
</script>

<style lang="scss" scoped>
// todo how to use the '~' alias here? I think the aliases are currently configured just for TS

// all these imports needed to get the media-breakpoint-up mixin ...
@import "../scss/custom_variables";
@import "../../node_modules/bootstrap/scss/functions";
@import "../../node_modules/bootstrap/scss/variables";
@import "../../node_modules/bootstrap/scss/mixins/breakpoints";

.tabs-container {
  max-height: 20vh;
}

.content {
  font-size: 12px;
}
.enneagram svg {
  max-height: 40vh;
  max-width: 100%;
}

// when menu is to the side
@include media-breakpoint-up(lg) {
  .tabs-container {
    max-height: none;
  }

  .enneagram svg {
    max-height: 55vh;
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
  display: block !important;
}

.hideArrowsIntegration svg #arrowsIntegration {
  display: none !important;
}

.showArrowsDisintegration svg #arrowsDisintegration {
  display: block !important;
}

.hideArrowsDisintegration svg #arrowsDisintegration {
  display: none !important;
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
