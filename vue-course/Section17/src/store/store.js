import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
    value: 0
  },
  getters: {
    counterDoubled: state =>  {
      return state.counter * 2;
    },
    value: state => {
      return state.value;
    }
  },
  // mutation control is in one central place for the whole application
  mutations: {
    increment: (state, payload) => {
      state.counter += payload;
    },
    decrement: state => {
      state.counter--;
    },
    updateValue: (state, payload) => {
      state.value = payload;
    }
  },
  actions: {
    increment: ({commit}, payload) => {
      setTimeout(() => {
        commit('increment', payload.by);
      }, payload.interval);
    },
    decrement: ({commit}) => {
      setTimeout(() => {
        commit('decrement');
      }, 1000);
    },
    updateValue: ({commit}, payload) => {
      commit('updateValue', payload);
    }
  }
});