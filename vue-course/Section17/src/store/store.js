import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    counterDoubled: state =>  {
      return state.counter * 2
    }
  },
  // mutation control is in one central place for the whole application
  mutations: {
    increment: (state, payload) => {
      state.counter += payload
    },
    decrement: state => {
      state.counter--
    },
  },
  actions: {
    increment: ({commit}, payload) => {
      setTimeout(() => {
        commit('increment', payload.by)
      }, payload.interval)
    },
    decrement: ({commit}) => {
      setTimeout(() => {
        commit('decrement')
      }, 1000)
    }
  }
});