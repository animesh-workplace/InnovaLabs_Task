<template>
    <div class="bg-gray-100 min-h-screen p-20">
        <div class="container mx-auto">
            <Nuxt />
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({}),
    components: {},
    methods: {},
    mounted() {
        this.$nextTick(() => {})
    },
    beforeMount() {
        this.$store.dispatch('GetDataAll')
    },
}
</script>

<style></style>
