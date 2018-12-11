import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Vuelidate from 'vuelidate'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vueclass-8171b.firebaseio.com'
// axios.defaults.headers.common['Authorization'] = 'Token'
axios.defaults.headers.get['Accepts'] = 'application/json'

let reqInterceptor = axios.interceptors.request.use(config => {
  return config;
})

let resInterceptor = axios.interceptors.response.use(res => {
  return res;
})

Vue.use(Vuelidate)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
