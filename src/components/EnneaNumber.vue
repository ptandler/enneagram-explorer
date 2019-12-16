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
          <template v-for="(authors, emotion, index) in visibleEmotions"
            ><span :key="emotion"
              ><template v-if="index > 0">, </template>
              <span v-b-tooltip :title="authors" class="emotion">{{ emotion }}</span></span
            ></template
          ></b-card-text
        >
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
import centers, { defaultCenter, Centers } from "@/data/centers"
import names from "@/data/names"
import references from "@/data/references"
import { contents, emotions } from "@/data/contents"
import { EnneagramNumbers } from "@/data/enneagramTypes"

@Component
export default class EnneaNumber extends Vue {
  @Prop(Number) protected readonly number: EnneagramNumbers | undefined
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

  get visibleEmotions() {
    const visibleEmotions: { [key: string]: string } = {}
    if (this.showEmotions && this.number) {
      let ref: keyof typeof emotions // somehow TypeScript can't infer this automatically
      for (ref in emotions) {
        if (emotions.hasOwnProperty(ref)) {
          // check if visible (selected by user)
          const emotion = emotions[ref]
          if (this.showEmotions.indexOf(ref) >= 0 && emotion) {
            const text = emotion[this.number]
            if (text) {
              // check if emotion is already included
              if (visibleEmotions[text]) {
                visibleEmotions[text] += " & " + references[ref].author
              } else {
                visibleEmotions[text] = references[ref].author
              }
            }
          }
        }
      }
    }
    return visibleEmotions
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
  /*
  max-height: 14em;
  @media (orientation: landscape) {
    max-height: 40vh;
  }
*/
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
