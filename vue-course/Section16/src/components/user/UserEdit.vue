<template>
  <div>
    <h3>Edit the User</h3>
    <p>Local: {{ $route.query.locale }}</p>
    <p>Analytics: {{ $route.query.q }}</p>
    <hr>
    <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
    <div>style=height: 700px</div>
    <p id="data">Some Data</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      confirmed: false
    };
  },
  // make sure user wants to leave
  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next();
    } else {
        if (confirm('Are you sure?')) {
            next();
        } else {
            next(false);
        }
    }
  }
};
</script>
