import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    // return to saved position if its there
    if (savedPosition) {
      return savedPosition;
    }
    // move to hash if its there in the url
    if (to.hash) {
      console.log("found hash")
      return {selector: to.hash}
    }
    return {x: 0, y: 0};
  }
})

router.beforeEach((to, from, next) => {
  console.log("global before each")
  next()
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
