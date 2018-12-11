import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import gAxios from 'axios'
import router from './router';

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
    },
    clearAuth(state) {
      state.idToken = null;
      state.userId = null;
    }
  },
  actions: {
    setLogoutTimer({commit}, expiration) {
      setTimeout( () => {
        commit('clearAuth');
      } , expiration * 1000)
    },
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
          dispatch('storeUser', authData);
          dispatch('setLogoutTimer', res.data.expiresIn);
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
    login({ commit, dispatch}, authData) {
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
          dispatch('setLogoutTimer', res.data.expiresIn);
        })
        .catch(err => console.log(err));
    },
    logout({commit}) {
      // clear auth and kick user back to home page
      commit('clearAuth');
      router.replace('/');
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.idToken !== null
    }
  }
})