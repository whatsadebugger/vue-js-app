<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{ $route.params.id }}</p>
    <router-link tag="button" :to="link" class="btn btn-primary">Edit User</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // this object is the link object that is pased to router-link
      // it has a named component that was registered
      // any params that are accesible /:id is an example
      // query ?local=en&q=100
      // hash is an id to jump to if setup correctly
      link: {
        name: "userEdit",
        params: {
          id: this.$route.params.id
        },
        query: {
          locale: "en",
          q: 100
        },
        hash: '#data'
      }
    };
  },
  beforeRouteEnter(to,from,next) {
    // object isn't initialized yet
    // if you dont call next it wont render
    if (true)
      next()
  }
};
</script>
