<template>
  <div>
    <b-card no-body>
      <p slot="header" class="font-weight-bold">
        {{ number }}
        <font-awesome-icon :icon="faIconName" style="float: right;" />
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
        <!--        <p class="card-text"></p>-->
        <b-list-group flush>
          <b-list-group-item
            v-for="(emotion, ref) in emotions"
            :key="ref"
            v-if="showEmotions.indexOf(ref) >= 0"
            v-b-tooltip
            :title="references[ref].author"
            class="emotion"
          >
            {{ emotion[number] }}
          </b-list-group-item>
        </b-list-group>
      </b-card-body>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import names from "../data/names"
import references from "../data/references"
import emotions from "../data/emotions"

@Component({
  components: {},
  props: {
    number: String,
    showNames: Array,
    showEmotions: Array,
  },
})
export default class EnneaNumber extends Vue {
  get names() {
    return names
  }

  get references() {
    return references
  }

  get emotions() {
    return emotions
  }

  get faIconName() {
    const n = parseInt((this as any).number, 10)
    if (n >= 2) {
      if (n <= 4) {
        return "heart"
      }
      if (n <= 7) {
        return "smile"
      }
    }
    return "tshirt"
  }
}
</script>

<style scoped lang="scss">
.card {
  // margin: 0.5em;
  max-height: 25vh;
  overflow-y: auto;

  .card-header {
    padding: 8px;

    p {
      margin: 0;
    }
  }

  .card-body {
    padding: 0;
  }

  .list-group-item {
    padding: 8px;
  }

  .name {
    display: block;
    border-top: 1px dashed lightgray;
  }
}
</style>
