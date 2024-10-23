export default {
    namespaced: true,

    state() {
        return {
            isMobile: screen.width <= 760,
            prevRoute: null
        }
    },

    getters: {
        getIsMobile(state) {
            return state.isMobile;
        },

        getPrevRoute(state) {
            return state.prevRoute
        }
    },

    actions: {
        setIsMobile ({commit}, name) {
            commit("setIsMobile", name);
        },

        setPrevRoute ({commit}, route) {
            commit('setPrevRoute', route)
        }
    },

    mutations: {
        setIsMobile(state, flag) {
            state.isMobile = flag;
        },

        setPrevRoute(state, route) {
            state.prevRoute = route;
        }
    }
}