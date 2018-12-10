import Vuex from 'vuex'
import Vue from 'vue';

import stocks from './modules/stocks'
import portfolio from './modules/portfolio'

import * as actions from './actions'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    value: 0
  },
  getters: {
    getValue: state => {
      return state.value
    }
  },
  mutations: {

  },
  actions,
  modules: {
    stocks,
    portfolio
  }
});
