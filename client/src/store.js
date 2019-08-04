import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resume: {},
    portfolios: [],
  },
  mutations: {
    SET_RESUME (state, data) {
      state.resume = data
    },
    SET_PORTFOLIOS (state, data) {
      state.portfolios = data
    },
  }
})
