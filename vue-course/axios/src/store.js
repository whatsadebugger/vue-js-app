import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import gAxios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    loginUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    storeUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    signup({ commit, dispatch }, authData) {
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
          });
          dispatch('storeUser', authData)
        })
        .catch(err => console.log(err));
    },
    storeUser({commit, state}, userData) {
      if (!state.idToken) {
        return
      }
      gAxios.post('users.json'+ '?auth=' + state.idToken, userData)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    },
    fetchUser({commit, state, dispatch}, userData) {
      gAxios.get('/users.json' + '?auth=' + state.idToken)
        .then(res => {
          console.log(res);
          const data = res.data;
          const users = []
          for (let key in data) {
            const user = data[key];
            user.id = key;
            users.push(user);
          }
          console.log(users);
          commit('storeUser', users[0])
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
            userId: res.data.localId
          })
        })
        .catch(err => console.log(err));
    }

  },
  getters: {
    user(state) {
      return state.user;
    }

  }
})