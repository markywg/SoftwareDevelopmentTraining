const state = {
    snackbar: { // 全局消息条
        show: false,
        timeout: 6000,
        color: 'grey darken-4',
        text: '消息内容'
    }
}

const getters = {
    snackbar: state => state.snackbar
}

const mutations = {
    showSnackbar(state, obj) {
        state.snackbar = obj
    },
    hideSnackbar(state) {
        state.snackbar.show = false
    }
}

const actions = {
    async showSnackbar({ commit }, obj) {
        commit('showSnackbar', obj)
    },
    async hideSnackbar({ commit }) {
        commit('hideSnackbar')
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}