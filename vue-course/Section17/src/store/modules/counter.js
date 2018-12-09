const state = {
  count: 0,
};


const getters = {
  count: state => {
    return state.count;
  },
  countDoubled: state => {
    return state.count * 2;
  },
  countString: state => {
    return state.count + ' Clicks'
  }
};

const mutations = {
  increment: (state, payload) => {
    state.count += payload;
  },
  decrement: state => {
    state.count--;
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
