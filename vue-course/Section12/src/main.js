import Vue from 'vue'
import App from './App.vue'

// Custom directives can be created and have access to five hooks
// you can pass arguments to directives in vue using directive:arg=""
// we can also add custom modifiers which are passed in as an object with the binding
// parameter
Vue.directive('highlight', {
  bind(el, binding, vnode) {
    // el.style.backgroundColor = 'green';
    // el.style.backgroundColor = binding.value;
    let delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
