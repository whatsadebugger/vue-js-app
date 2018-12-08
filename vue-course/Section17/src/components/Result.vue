<template>
<div>
  <p>Counter is: {{ counter }}</p>
  <p>Counter Doubled is: {{ doubledCounter }}</p>
  <p>Counter Doubled with mapGetter is: {{ counterDoubled }}</p>

</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    doubledCounter() {
      return this.$store.getters.counterDoubled;
    },
    ...mapGetters([
      'counterDoubled',
    ])
  }
};
</script>