<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model="user.username">
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" v-model="user.email">
        </div>
        <button class="btn btn-primary" @click="submit">Submit!</button>
        <hr>
        <input type="text" class="form-control" v-model="node">
        <br><br>
        <button class="btn btn-primary" @click="fetchData">Get Data!</button>
        <br><br>
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="u in users"
            :key="u.id"
          >{{ u.username }} - {{ u.email }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      users: [],
      resource: {},
      node: 'data',
    };
  },
  methods: {
    submit() {
      // this.$http
      //   .post("data.json", this.user)
      //   .then(
      //     response => {
      //       console.log(response);
      //     },
      //     error => {
      //       console.log(error);
      //     }
      //   );
      // this.resource.save({}, this.user);
      this.resource.saveAlt(this.user);
    },
    // this.$http is provided by vue-resource so that we can make http requests.
    fetchData() {
      // this.$http.get("data.json").then(
      //   resp => {
      //     return resp.json()
      //   },
      //   err => {
      //     console.log(err);
      //   }
      // ).then(
      //   data => {
      //     const result = [];
      //     console.log(data);
      //     for (let key in data) {
      //       result.push(data[key]);
      //     }
      //     this.users = result
      //   }
      // );
      this.resource.getData({node: this.node}).then(
        resp => {
          return resp.json()
        },
        err => {
          console.log(err);
        }
      ).then(
        data => {
          const result = [];
          console.log(data);
          for (let key in data) {
            result.push(data[key]);
          }
          this.users = result
        }
      );
    }
  },
  // created life cycle hook
  // add a custom resource using vue-resource
  // the customAction allows us to create custom actions for spcecific methods and are available
  // from the resource data object that we created using this.$resource
  created() {
    const customActions = {
      saveAlt: {method: 'POST', url: 'alternative.json'},
      getData: {method: 'GET'}
    }
    this.resource = this.$resource('{node}.json', {}, customActions);
  }
};
</script>

<style>
</style>
