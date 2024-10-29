import { createStore } from 'vuex';
import miscModule from './modules/miscModule';
import projectModule from './modules/projectModule';

export default createStore({
  modules: {
    misc: miscModule,
    project: projectModule
  },

  state: {},
  getters: {},
  mutations: {},
  actions: {}
})
