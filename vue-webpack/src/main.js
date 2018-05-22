import Vue from 'vue'
import App from './App.vue'
import Message from './Message.vue'

Vue.component('app-message', Message)

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})


new Vue({
  el: '#app',
  render: h => h(App)
})
