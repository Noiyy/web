export default {
    namespaced: true,

    state() {
        return {
            newItemName: null,
        }
    },

    getters: {
        getNewItemName(state) {
            return state.newItemName;
        },
    },

    actions: {
        setNewItemName ({commit}, name) {
            commit('setNewItemName', name);
        },
    },

    mutations: {
        setNewItemName(state, data) {
            state.newItemName = data;
        },
    }
}