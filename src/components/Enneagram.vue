<template>
  <div class="enneagram">
    <EnneagramSvg />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import EnneagramSvg from '../assets/enneagram/Enneagram.svg'

@Component({
  components: {
    EnneagramSvg,
  },
})
export default class Enneagram extends Vue {
}
</script>

<style scoped lang="scss">
</style>
