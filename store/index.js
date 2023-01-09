import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
    data_summary: [],
})

export const getters = {
    getField,
}

export const mutations = {
    updateField,
    SET_DATA_SUMMARY(state, payload) {
        state.data_summary = payload
    },
}

export const actions = {
    async GetDataAll({ commit, dispatch }) {
        try {
            const response = await this.$axios.$get(
                'https://jsonplaceholder.typicode.com/comments/'
            )
            await commit('SET_DATA_SUMMARY', response)
        } catch (err) {
            console.log(err)
        }
    },
}
