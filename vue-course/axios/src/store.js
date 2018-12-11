import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.idToken;
      state.userId = userData.userId;
    },
    loginUser(state, userData) {
      state.idToken = userData.idToken;
      state.userId = userData.userId;
    }

  },
  actions: {
    signup({ commit }, authData) {
      axios.post('/signupNewUser?key=AIzaSyBvgi72MwdjU5Y_caE1it2VMPv02bzgwyk', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true,
      })
        .then(res => {
          console.log(res);
          commit('authUser', {
            token: res.data.idToken,
            userid: res.data.localId
          })
        })
        .catch(err => console.log(err));
    },
    login({ commit }, authData) {
      axios.post('verifyPassword?key=AIzaSyBvgi72MwdjU5Y_caE1it2VMPv02bzgwyk', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true,
      })
        .then(res => {
          console.log(res)
          commit('loginUser', {
            token: res.data.idToken,
            userid: res.data.localId
          })
        })
        .catch(err => console.log(err));
    }

  },
  getters: {

  }
})