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
    }"
  >
    <b-card no-body class="col-lg-3 tabs-container">
      <b-tabs vertical pills fill card>
        <b-tab active title="Intro">
          <IntroText />
        </b-tab>
        <b-tab title="Enneagram">
          <b-form>
            <!-- <b-form-checkbox id="showHelpers" v-model="showHelpers">Helpers</b-form-checkbox> -->
            <b-form-checkbox id="showCenters" v-model="showCenters">3 Zentren<!-- Centers --></b-form-checkbox>
            <b-form-checkbox id="showArrowsIntegration" v-model="showArrowsIntegration"
              >Entwicklungsrichtung<!--Direction of
                        integration-->
            </b-form-checkbox>
            <b-form-checkbox id="showArrowsDisintegration" v-model="showArrowsDisintegration">
              Verwicklungsrichtung<!--Direction of
                        disintegration-->
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
        <b-tab title="Emotionen">
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
    <b-card class="content col-lg-9">
      <!-- information about the 3 centers -->
      <CenterInfoModal v-for="centerId in centerIds" :key="centerId" :centerId="centerId" />

      <!-- 3x3 grid as basis for the graphic and the boxes with description -->
      <b-row align-h="center">
        <b-col cols="3">
          <EnneaNumber :show-emotions="showEmotions" :show-names="showNames" number="8" />
        </b-col>
        <b-col cols="3">
          <EnneaNumber :show-emotions="showEmotions" :show-names="showNames" number="9" />
        </b-col>
        <b-col cols="3">
          <EnneaNumber :show-emotions="showEmotions" :show-names="showNames" number="1" />
        </b-col>
      </b-row>
      <b-row align-v="center">
        <b-col cols="3">
          <EnneaNumber :show-emotions="showEmotions" :show-names="showNames" number="7" />
          <br />
          <EnneaNumber :show-emotions="showEmotions" :show-names="showNames" number="6" />
        </b-col>
        <b-col cols="6">
          <div class="enneagram">
            <EnneagramSvg />
          </div>
        </b-col>
        <b-col cols="3">
          <EnneaNumber :show-emotions="showEmotions" :show-names="showNames" number="2" />
          <br />
          <EnneaNumber :show-emotions="showEmotions" :show-names="showNames" number="3" />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="3" offset="3">
          <EnneaNumber :show-emotions="showEmotions" :show-names="showNames" number="5" />
        </b-col>
        <b-col cols="3">
          <EnneaNumber :show-emotions="showEmotions" :show-names="showNames" number="4" />
        </b-col>
      </b-row>
    </b-card>
  </b-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import EnneagramSvg from "../assets/enneagram/Enneagram.svg"
import EnneaNumber from "./EnneaNumber.vue"
import names from "@/data/names"
import references from "@/data/references"
import { emotions } from "@/data/contents"
import { centerIds } from "@/data/centers"
import IntroText from "@/components/IntroText.vue"
import CenterInfoModal from "@/components/CenterInfoModal.vue"

@Component({
  components: {
    CenterInfoModal,
    IntroText,
    EnneagramSvg,
    EnneaNumber,
  },
})
export default class Enneagram extends Vue {
  public showHelpers = false
  public showCenters = true
  public showNumbers = true
  public showPlusMinus = true
  public showArrowsIntegration = false
  public showArrowsDisintegration = false
  public showNames = ["hurley_dobson"]
  public showEmotions = ["riso_hudson"]

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
@import "../scss/custom_variables";
@import "../../node_modules/bootstrap/scss/functions";
@import "../../node_modules/bootstrap/scss/variables";
@import "../../node_modules/bootstrap/scss/mixins/breakpoints";

.tabs-container {
  max-height: 20vh;
}

@include media-breakpoint-up(lg) {
  .tabs-container {
    max-height: none;
  }
}
.content {
  font-size: 12px;
}
.enneagram svg {
  max-height: 40vh;
  max-width: 100%;
}

// rules to show / hide parts of the Enneagram.svg

.showHelpers svg #layerHelpers {
  display: block !important;
}

.hideHelpers svg #layerHelpers {
  display: none !important;
}

.showCenters svg #centers {
  display: block !important;
}

.hideCenters svg #centers {
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
</style>
