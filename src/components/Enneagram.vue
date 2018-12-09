<template>
  <div class="enneagram" :class="{
            showHelpers: showHelpers, hideHelpers: !showHelpers,
            showCenters: showCenters, hideCenters: !showCenters,
            showNumbers: showNumbers, hideNumbers: !showNumbers,
            showPlusMinus: showPlusMinus, hidePlusMinus: !showPlusMinus,
            showArrowsIntegration: showArrowsIntegration, hideArrowsIntegration: !showArrowsIntegration,
            showArrowsDisintegration: showArrowsDisintegration, hideArrowsDisintegration: !showArrowsDisintegration,
        }">
	<b-navbar toggleable="md">
		<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
		<b-collapse is-nav id="nav_collapse">
			<b-navbar-nav>
				<b-nav-form>
					<!-- <b-form-checkbox id="showHelpers" v-model="showHelpers">Helpers</b-form-checkbox> -->
					<b-form-checkbox id="showCenters" v-model="showCenters">Centers</b-form-checkbox>
					<b-form-checkbox id="showArrowsIntegration" v-model="showArrowsIntegration">Direction of integration</b-form-checkbox>
					<b-form-checkbox id="showArrowsDisintegration" v-model="showArrowsDisintegration">Direction of disintegration</b-form-checkbox>
				</b-nav-form>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
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
  public showHelpers = false
  public showCenters = true
  public showNumbers = true
  public showPlusMinus = true
  public showArrowsIntegration = false
  public showArrowsDisintegration = false
}
</script>

<style scoped lang="scss">

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
