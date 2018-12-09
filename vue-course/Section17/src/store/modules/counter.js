const state = {
  counter: 0,
};


const getters = {
  counter: state => {
    return state.counter;
  },
  counterDoubled: state => {
    return state.counter * 2;
  },
  counterString: state => {
    return state.counter + ' Clicks'
  }
};

const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
  },
  decrement: state => {
    state.counter--;
  },
};

const actions = {
  increment: ({ commit }, payload) => {
    setTimeout(() => {
      commit('increment', payload.by);
    }, payload.interval);
  },
  decrement: ({ commit }) => {
    setTimeout(() => {
      commit('decrement');
    }, 1000);
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}
