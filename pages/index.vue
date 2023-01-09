<template>
    <div>
        <GeneralBtnGroup :options="navbar_options" @selected="SwitchOption" />

        <GeneralQuestion2 v-if="option_selected == 'Option_Question 2'" />
        <GeneralQuestion3 v-if="option_selected == 'Option_Question 3'" />
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
