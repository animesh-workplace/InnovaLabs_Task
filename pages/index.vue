<template>
    <div>
        <GeneralBtnGroup :options="navbar_options" @selected="SwitchOption" />

        <Question2 v-if="option_selected == 'Option_Question2'" />
        <Question3 v-if="option_selected == 'Option_Question3'" />
    </div>
</template>

<script>
export default {
    name: 'IndexPage',
    data: () => ({
        option_selected: null,
        navbar_options: ['Question 2', 'Question 3'],
    }),
    methods: {
        SwitchOption(option) {
            this.option_selected = option
        },
    },
}
</script>
