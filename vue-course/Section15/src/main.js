import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);

// set the root url for all vue-resource requests
Vue.http.options.root = 'https://vueclass-8171b.firebaseio.com/'

// interceptors to hook in and modify requests and responses
Vue.http.interceptors.push((req, next) => {
  console.log(req);
  if (req.method === 'POST') {
    req.method = 'PUT'
  }
  next(resp => {
    resp.json = () => { return {messages: resp.body}}
  });
})

new Vue({
  el: '#app',
  render: h => h(App)
})
