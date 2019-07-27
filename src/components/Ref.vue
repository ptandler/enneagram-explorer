<template>
  <span class="reference" @click="$emit('show-tab-ref')">
    ({{ reference.author }}<span v-if="page">, {{ page }}</span
    >)</span
  >
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"
import references from "@/data/references"

@Component
export default class Ref extends Vue {
  @Prop(String) protected readonly id: string | undefined

  @Prop({
    type: String,
    required: false,
  })
  protected readonly page: string | undefined

  get reference() {
    if (!this.id) {
      return {}
    }
    const r = references as any
    return r[this.id]
  }
}
</script>
<style scoped lang="scss">
.reference {
  color: gray !important;
  font-size: 50%;
}
</style>
