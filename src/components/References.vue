<template>
  <b-container v-hammer:swipe.right="onSwipeRight">
    <h5>Quellen</h5>
    <p>
      Die Informationen in der Darstellung stammen im wesentlichen aus diesen Quellen:
    </p>
    <ul>
      <li v-for="(lit, ref) in references" :key="ref" v-if="!lit.citedBy">
        <span v-if="lit.author" class="author">{{ lit.author }}. </span
        ><span v-if="lit.src && lit.title" class="title"
          ><b-link :href="lit.src" target="_blank">{{ lit.title }}</b-link
          >. </span
        ><span v-else-if="lit.title" class="title">{{ lit.title }}. </span
        ><span v-if="lit.year" class="year">{{ lit.year }}. </span
        ><span v-if="lit.ISBN" class="isbn">ISBN {{ lit.ISBN }} </span
        ><span v-if="lit.ebook" class="ebook">(<b-link :href="lit.ebook" target="_blank">E-Book</b-link>) </span>
      </li>
    </ul>
    <p>
      W. Reifrath fand ich insbesondere als sehr hilfreich, da dort viele andere Quellen übersichtlich zusammengefasst
      sind.
    </p>
    <h5>Weitere Literatur</h5>
    <p>
      Auf diese Bücher wird in den verwendeten Quellen (vor allem bei Reifrath) verwiesen.
    </p>
    <ul>
      <li v-for="(lit, ref) in references" :key="ref" v-if="lit.citedBy">
        <span v-if="lit.author" class="author">{{ lit.author }}. </span
        ><span v-if="lit.src && lit.title" class="title"
          ><b-link :href="lit.src" target="_blank">{{ lit.title }}</b-link
          >. </span
        ><span v-else-if="lit.title" class="title">{{ lit.title }}. </span
        ><span v-if="lit.year" class="year">{{ lit.year }}. </span
        ><span v-if="lit.ISBN" class="isbn">ISBN {{ lit.ISBN }} </span
        ><span v-if="lit.ebook" class="ebook">(<b-link :href="lit.ebook" target="_blank">E-Book</b-link>) </span>
        (zitiert in
        {{ references[lit.citedBy].author }})
      </li>
    </ul>
  </b-container>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import references from "@/data/references"

@Component
export default class References extends Vue {
  public onSwipeRight() {
    this.$router.push("/enneagram")
  }

  // getters needed to make imported data available to template

  // noinspection JSMethodCanBeStatic
  get references() {
    return references
  }
}
</script>
<style scoped lang="scss">
.title {
  font-style: italic;
}
</style>
