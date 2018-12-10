import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResrouce from 'vue-resource'

import App from './App.vue'
import { routes } from './routes'

import store from './store/store'


Vue.use(VueRouter)
Vue.use(VueResrouce)

Vue.http.options.root = 'https://vueclass-8171b.firebaseio.com/'

Vue.filter('dollar', value => {
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
