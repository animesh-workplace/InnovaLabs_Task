<template>
    <div class="flex justify-center">
        <form @submit.prevent="submitForm" class="mt-8 max-w-md">
            <div class="grid grid-cols-1 gap-6 mb-4">
                <template v-for="block in blocks">
                    <template v-if="block.type === 'text'">
                        <label class="block">
                            <span class="text-gray-700">
                                {{ block.props.title }}
                            </span>
                            <input
                                type="text"
                                :id="block.token"
                                v-model="formData[block.token]"
                                :required="block.props.required"
                                :placeholder="block.props.placeholder"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </label>
                    </template>
                    <template v-if="block.type === 'checkbox'">
                        <label class="block">
                            <span class="text-gray-700">
                                {{ block.props.title }}
                            </span>
                            <input
                                type="checkbox"
                                :id="block.token"
                                v-model="formData[block.token]"
                                class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50"
                            />
                        </label>
                    </template>
                    <template v-if="block.type === 'date'">
                        <label class="block">
                            <span class="text-gray-700">
                                {{ block.props.title }}
                            </span>
                            <input
                                type="date"
                                :id="block.token"
                                v-model="formData[block.token]"
                                :placeholder="block.props.placeholder"
                                :required="formData[block.props.required]"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </label>
                    </template>
                </template>
            </div>

            <div class="block" v-if="errors">
                <span v-for="(error, index) in errors" :key="index">
                    {{ index }} : {{ error }}
                </span>
            </div>

            <button
                type="submit"
                class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
            >
                Submit
            </button>
        </form>
    </div>
</template>

<script>
export default {
    data: () => ({
        errors: {},
        formData: {},
        blocks: [
            {
                token: 'PERSON_NAME',
                type: 'text',
                props: {
                    required: true,
                    title: 'Enter your name',
                    placeholder: 'e-g. John Doe',
                },
            },
            {
                token: 'IS_PERSON_MINOR',
                type: 'checkbox',
                props: {
                    default: false,
                    title: 'Is the current person minor?',
                },
            },
            {
                token: 'PERSON_DOB',
                type: 'date',
                props: {
                    default: false,
                    title: 'Enter DOB',
                    required: 'IS_PERSON_MINOR',
                    placeholder: 'e.g. 01/01/2000',
                },
            },
        ],
    }),
    methods: {
        // validateForm() {
        //     // reset any previous errors
        //     this.errors = {}

        //     // validate each field
        //     for (const block of this.blocks) {
        //         if (block.props.required && !this.formData[block.token]) {
        //             this.$set(
        //                 this.errors,
        //                 block.token,
        //                 'This field is required'
        //             )
        //         }
        //     }

        //     if (Object.keys(this.errors).length > 0) {
        //         return false
        //     }

        //     this.submitForm()
        // },
        submitForm() {
            alert('Form has passed check and will be submitted')
            console.log(this.formData)
        },
    },
    mounted() {
        this.$nextTick(() => {})
    },
}
</script>

<style scoped></style>
