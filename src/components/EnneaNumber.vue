<template>
  <div>
    <b-card no-body>
      <p slot="header" class="font-weight-bold">
        {{ number }}
        <span
          class="center"
          :class="{ ['center-' + centerName]: true, ['number-' + number]: true }"
          v-b-tooltip
          :title="centers[defaultCenter][centerName]"
          v-b-modal="'modal-center-' + centerName"
          ><font-awesome-icon :icon="faIconName"
        /></span>
        <span
          v-for="(name, ref) in names"
          :key="ref"
          v-if="showNames.indexOf(ref) >= 0"
          v-b-tooltip
          :title="references[ref].author"
          class="name"
        >
          {{ name[number] }}
        </span>
      </p>
      <b-card-body>
        <b-card-text
          ><b>Leidenschaft</b>:
          <span
            v-for="(emotion, ref) in emotions"
            :key="ref"
            v-if="showEmotions.indexOf(ref) >= 0"
            v-b-tooltip
            :title="references[ref].author"
            class="content emotion"
          >
            {{ emotion[number] }}
          </span>
        </b-card-text>
        <b-card-text
          v-for="(content, i) in contents"
          :key="i"
          v-show="showContents[content.showIf || content.title]"
          v-b-tooltip
          :title="references[content.refId].author + ', ' + content.page"
          class="content"
          ><b>{{ content.title }}</b
          >: {{ content[number] }}
        </b-card-text>
      </b-card-body>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"
import centers, { defaultCenter } from "@/data/centers"
import names from "@/data/names"
import references from "@/data/references"
import { contents, emotions } from "@/data/contents"

@Component
export default class EnneaNumber extends Vue {
  @Prop(String) protected readonly number: string | undefined
  @Prop(Array) protected readonly showNames: string[] | undefined
  @Prop(Array) protected readonly showEmotions: string[] | undefined
  @Prop(Object) protected readonly showContents: any | undefined

  // getters needed to make imported data available to template

  // noinspection JSMethodCanBeStatic
  get names() {
    return names
  }

  // noinspection JSMethodCanBeStatic
  get centers() {
    return centers
  }

  // noinspection JSMethodCanBeStatic
  get defaultCenter() {
    return defaultCenter
  }

  // noinspection JSMethodCanBeStatic
  get references() {
    return references
  }

  // noinspection JSMethodCanBeStatic
  get emotions() {
    return emotions
  }

  // noinspection JSMethodCanBeStatic
  get contents() {
    return contents
  }

  get faIconName() {
    switch (this.centerName) {
      case "heart":
        return "heart"
      case "head":
        return "smile"
    }
    // what to use for "gut"?
    // options: tshirt, hand-rock, hand-paper, hand-holding-heart, fist-raised
    return "hand-paper"
  }

  get centerName() {
    const n = parseInt((this as any).number, 10)
    if (n >= 2) {
      if (n <= 4) {
        return "heart"
      }
      if (n <= 7) {
        return "head"
      }
    }
    return "gut"
  }
}
</script>

<style scoped lang="scss" scoped>
@import "../scss/custom_variables";

.card {
  margin: 15px;
  max-height: 22vh;
  @media (orientation: landscape) {
    max-height: 40vh;
  }
  overflow-y: auto;

  .card-header {
    padding: 8px;

    p {
      margin: 0;
    }
  }

  .card-body {
    padding: 0;
    p {
      margin-bottom: 3px;
    }
  }

  .list-group-item {
    padding: 8px;
  }

  .name {
    display: block;
    border-top: 1px dashed lightgray;
  }
}

.center {
  float: right;
}

@each $i, $color in $colors {
  .number-#{$i} {
    color: $color;
  }
}

// show / hide center information if enabled / disabled
.showCenters .center {
  display: block !important;
}

.hideCenters .center {
  display: none !important;
}
</style>
