<template>
    <div class="flex justify-center">
        <v-grid
            filter
            exporting
            :columns="columns"
            :source="data_summary"
            class="add-height mt-8 max-w-xl"
        />
    </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
    data: () => ({
        columns: [
            { prop: 'postId', name: 'PostID', sortable: true },
            { prop: 'id', name: 'ID', sortable: true },
            { prop: 'email', name: 'Email', sortable: true },
            { prop: 'name', name: 'Name', sortable: true },
            { prop: 'body', name: 'Body', sortable: true },
        ],
        rows: [{ name: '1', details: 'Item 1' }],
    }),
    computed: {
        ...mapFields(['data_summary']),
    },
    components: {},
    methods: {},
    mounted() {
        this.$nextTick(() => {})
    },
}
</script>

<style scoped>
.add-height {
    height: 50vh;
}
</style>
