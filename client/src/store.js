import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resume: {},
    portfolio: [],
  },
  mutations: {
    SET_RESUME (state, data) {
      state.resume = data
    },
    SET_PORTFOLIO (state, data) {
      state.portfolio = data
    },
  }
})
