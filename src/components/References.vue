<template>
  <div>
    <h5>Quellen</h5>
    <p>
      Die Informationen in der Darstellung stammen im wesentlichen aus diesen Quellen:
    </p>
    <ul>
      <li v-for="(lit, ref) in references" :key="ref" v-if="!lit.citedBy">
        {{ lit.author }}. <i>{{ lit.title }}</i
        >. {{ lit.year }}. <a :href="lit.src" v-if="lit.ISBN">ISBN {{ lit.ISBN }}</a
        ><span v-if="lit.ebook"> (<a :href="lit.ebook" target="_blank">E-Book</a>)</span>
      </li>
    </ul>
    <h5>Weitere Literatur</h5>
    <p>
      Auf diese Bücher wird in den verwendeten Quellen verwiesen.
    </p>
    <ul>
      <li v-for="(lit, ref) in references" :key="ref" v-if="lit.citedBy">
        {{ lit.author }}. <i>{{ lit.title }}</i
        >. {{ lit.year }}. <a :href="lit.src" target="_blank" v-if="lit.ISBN">ISBN {{ lit.ISBN }}</a
        ><span v-if="lit.ebook"> (<a :href="lit.ebook">E-Book</a>)</span> (zitiert in
        {{ references[lit.citedBy].author }})
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import references from "@/data/references"

@Component
export default class References extends Vue {
  // getters needed to make imported data available to template

  // noinspection JSMethodCanBeStatic
  get references() {
    return references
  }
}
</script>
