<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <button @click="navigateToHome" class="btn btn-primary">Go Home</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
// https://github.com/vuejs/vue-router/tree/dev/examples/route-props
// good example of passing props to urls so you don't need to watch the route
// for changes
export default {
  methods: {
    navigateToHome() {
      // this.$router.push('/');
      this.$router.push({ name: 'Home'});
    }
  }
};
</script>
