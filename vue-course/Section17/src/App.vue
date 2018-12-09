<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <app-counter></app-counter>
        <hr>
        <another-counter></another-counter>
        <hr>
        <app-result></app-result>
        <another-result></another-result>
        <hr>
        <input type="text" v-model="value">
        <p>{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import AnotherCounter from "./components/AnotherCounter.vue";
import Result from "./components/Result.vue";
import AnotherResult from "./components/AnotherResult.vue";

export default {
  computed: {
    value: {
      get() {
        return this.$store.getters.value;
      },
      set(value) {
        this.$store.dispatch('updateValue', event.target.value);
      }
    }
  },
  methods: {
    updateValue(e) {
      this.$store.dispatch('updateValue', event.target.value);
    }
  },
  components: {
    appCounter: Counter,
    appResult: Result,
    AnotherCounter,
    AnotherResult
  }
};
</script>

