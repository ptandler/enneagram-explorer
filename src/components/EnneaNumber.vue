<template>
    <div>
        <b-card no-body>
            <h5 slot="header">{{number}}
                <span v-for="(name, ref) in names" :key="ref"
                      v-show="showNames.indexOf(ref) >= 0"
                      v-b-tooltip :title="references[ref].author">{{name[number]}} </span>
                <font-awesome-icon :icon="faIconName"/>
            </h5>
            <b-card-body>
                <p class="card-text">
                    ...
                </p>
                <b-list-group flush>
                    <!--
                                        <b-list-group-item>Cras justo odio</b-list-group-item>
                                        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                                        <b-list-group-item>Vestibulum at eros</b-list-group-item>
                    -->
                </b-list-group>
            </b-card-body>
        </b-card>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import names from '../data/names'
import references from '../data/references'

@Component({
    components: {},
    props: {
        number: String,
        showNames: Array,
    },
})
export default class EnneaNumber extends Vue {
    get names() {
        return names
    }

    get references() {
        return references
    }

    get faIconName() {
        const n = parseInt(this.number, 10)
        if (n >= 2) {
            if (n <= 4) {
                return 'heart'
            }
            if (n <= 7) {
                return 'smile'
            }
        }
        return 'tshirt'
    }
}
</script>

<style scoped lang="scss">

    .card {
        // margin: 0.5em;
        max-height: 25vh;
        overflow-y: auto;
    }
</style>