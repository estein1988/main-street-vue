<template>
    <div>
        <v-select :filter="fuseSearch" :options="businesses" :getOptionLabel="option => option.business_name">
            <template #option="{ business }">
                {{ business.industry }}
                <br />
                <cite>{{ business.business_name }}</cite>
            </template>
        </v-select>
    </div>
</template>

<script>
// import business from '../App'
import Fuse from "fuse.js";

export default {
    props: {
        business: Object,
    },
    // computed: {
    //     business: () => business
    // },
    methods: {
        fuseSearch(options, search) {
        const fuse = new Fuse(options, {
            keys: ["business.business_name"],
            shouldSort: true
        });
        return search.length
            ? fuse.search(search).map(({ item }) => item)
            : fuse.list;
        }
    }
}
</script>

<style lang="scss">
</style>