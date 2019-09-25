<template>
  <b-modal :id="'modal-center-' + centerId" :title="title" scrollable centered ok-only>
    <p v-for="(center, ref) in centers" :key="ref">{{ center[centerId] }} ({{ references[ref].author }})</p>
  </b-modal>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"
import centers, { defaultCenter, Centers } from "@/data/centers"
import references from "@/data/references"

@Component
export default class CenterInfoModal extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  protected readonly centerId: Centers | undefined

  get title() {
    if (!this.centerId) {
      return ""
    }
    const center = centers[defaultCenter]
    if (!center) {
      return ""
    }
    return center[this.centerId]
  }
  get centers() {
    return centers
  }

  get defaultCenter() {
    return defaultCenter
  }

  get references() {
    return references
  }
}
</script>
<style lang="scss"></style>
