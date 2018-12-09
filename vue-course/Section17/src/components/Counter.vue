<template>
  <div>
    <button class="btn btn-primary" @click="increment(10)">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
    <button class="btn btn-primary" @click="asyncIncrement({by: 10, interval: 100})">Increment Async</button>
    <button class="btn btn-primary" @click="asyncDecrement">Decrement Async</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapMutations([
      'increment',
      'decrement'
    ]),
    ...mapActions({
      asyncIncrement: 'increment',
      asyncDecrement: 'decrement',
    })

  }
};
</script>