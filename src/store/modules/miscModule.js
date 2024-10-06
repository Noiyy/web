export default {
    namespaced: true,

    state() {
        return {
            newItemName: null,
            prevRoute: null
        }
    },

    getters: {
        getNewItemName(state) {
            return state.newItemName;
        },

        getPrevRoute(state) {
            return state.prevRoute
        }
    },

    actions: {
        setNewItemName ({commit}, name) {
            commit('setNewItemName', name);
        },

        setPrevRoute ({commit}, route) {
            commit('setPrevRoute', route)
        }
    },

    mutations: {
        setNewItemName(state, data) {
            state.newItemName = data;
        },

        setPrevRoute(state, data) {
            state.prevRoute = data;
        }
    }
}