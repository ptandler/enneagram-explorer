<template>
    <div class="enneagram" :class="{
            showHelpers: showHelpers, hideHelpers: !showHelpers,
            showCenters: showCenters, hideCenters: !showCenters,
            showNumbers: showNumbers, hideNumbers: !showNumbers,
            showPlusMinus: showPlusMinus, hidePlusMinus: !showPlusMinus,
            showArrowsIntegration: showArrowsIntegration, hideArrowsIntegration: !showArrowsIntegration,
            showArrowsDisintegration: showArrowsDisintegration, hideArrowsDisintegration: !showArrowsDisintegration,
        }">
        <b-tabs vertical>
            <b-tab title="Enneagram" active>
                <b-form>
                    <!-- <b-form-checkbox id="showHelpers" v-model="showHelpers">Helpers</b-form-checkbox> -->
                    <b-form-checkbox id="showCenters" v-model="showCenters">3 Zentren<!-- Centers --></b-form-checkbox>
                    <b-form-checkbox id="showArrowsIntegration" v-model="showArrowsIntegration">Entwicklungsrichtung<!--Direction of
                        integration-->
                    </b-form-checkbox>
                    <b-form-checkbox id="showArrowsDisintegration" v-model="showArrowsDisintegration">
                        Verwicklungsrichtung<!--Direction of
                        disintegration-->
                    </b-form-checkbox>
                </b-form>
            </b-tab>
            <b-tab title="Namen">
                <b-form-checkbox v-for="(name, ref) in names" :key="ref" :id="'showName_' + ref" v-model="showNames"
                                 :value="ref">
                    {{references[ref].author}}
                </b-form-checkbox>
            </b-tab>
        </b-tabs>
        <b-container>
            <b-row align-h="center">
                <b-col cols="3">
                    <EnneaNumber number="8" :show-names="showNames"/>
                </b-col>
                <b-col cols="3">
                    <EnneaNumber number="9" :show-names="showNames"/>
                </b-col>
                <b-col cols="3">
                    <EnneaNumber number="1" :show-names="showNames"/>
                </b-col>
            </b-row>
            <b-row align-v="center">
                <b-col cols="3">
                    <EnneaNumber number="7" :show-names="showNames"/>
                    <br/>
                    <EnneaNumber number="6" :show-names="showNames"/>
                </b-col>
                <b-col cols="6">
                    <div class="enneagram">
                        <EnneagramSvg/>
                    </div>
                </b-col>
                <b-col cols="3">
                    <EnneaNumber number="2" :show-names="showNames"/>
                    <br/>
                    <EnneaNumber number="3" :show-names="showNames"/>
                </b-col>
            </b-row>
            <b-row>
                <b-col offset="3" cols="3">
                    <EnneaNumber number="5" :show-names="showNames"/>
                </b-col>
                <b-col cols="3">
                    <EnneaNumber number="4" :show-names="showNames"/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator"
    import EnneagramSvg from "../assets/enneagram/Enneagram.svg"
    import EnneaNumber from "./EnneaNumber.vue"
    import names from "../data/names"
    import references from "../data/references"

    @Component({
        components: {
            EnneagramSvg,
            EnneaNumber,
        },
    })
    export default class Enneagram extends Vue {
        public showHelpers = false
        public showCenters = true
        public showNumbers = true
        public showPlusMinus = true
        public showArrowsIntegration = false
        public showArrowsDisintegration = false
        public showNames = ["hurley_dobson"]

        get names() {
            return names
        }

        get references() {
            return references
        }

        // public created() {
        // }

    }
</script>

<style scoped lang="scss">
    .enneagram svg {
        max-height: 40vh;
        max-width: 100%;
    }

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
