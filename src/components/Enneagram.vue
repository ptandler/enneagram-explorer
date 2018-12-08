<template>
  <div class="enneagram">
    <img src="Enneagram.svg" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Enneagram extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
</style>
