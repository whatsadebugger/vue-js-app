<template>
  <div class="container">
    <form v-show="!isSubmitted">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Register</h1>
          <hr>
          <app-full-name v-model="fullName"></app-full-name>
          <div class="form-group">
            <!-- Mail -->
            <label for="emailInput">Email</label>
            <input type="email" id="emailInput" class="form-control" v-model="email">
          </div>
          <div class="form-group">
            <!-- Password -->
            <label for="passwordInput">Password</label>
            <input type="password" id="passwordInput" class="form-control" v-model="password">
          </div>
          <div class="form-group">
              <!-- Store Data? Yes/No -->
              <app-switch v-model="dataSwitch"></app-switch>
          </div>
          <button class="btn btn-primary" type="submit" @click.prevent="submitted">Submit</button>
          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-show="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ fullName }}</p>
            <p>Mail: {{ email }}</p>
            <p>Password: {{ password }} </p>
            <p>Store in Database?: {{ dataSwitch }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Switch from './Switch.vue';
import Full from './FullName.vue';
export default {
  data() {
    return {
      isSubmitted: false,
      mail: "",
      password: "",
      dataSwitch: false,
      fullName: "Ahmad Tabbakha"
    };
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
    }
  },
  components: {
    appSwitch: Switch,
    appFullName: Full,
  }
};
</script>

<style>
</style>
