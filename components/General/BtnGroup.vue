<template>
    <div class="flex justify-center">
        <button
            :key="index"
            type="button"
            @click="EmitClick(option)"
            v-for="(option, index) in options"
            class="inline-flex items-center px-4 py-2 text-sm font-medium bg-transparent border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white ml-1"
            :class="selected == option ? 'bg-gray-900 text-white' : ''"
        >
            {{ option }}
        </button>
    </div>
</template>

<script>
export default {
    name: 'BtnGroup',
    data: () => ({
        selected: false,
    }),
    props: {
        options: { type: Array, default: Array },
    },
    methods: {
        EmitClick(option) {
            // Child to parent communication
            if (option == this.selected) {
                this.selected = false
                this.$emit('selected', null)
            } else {
                this.selected = option
                this.$emit('selected', `Option_${option}`)
            }
        },
    },
}
</script>
