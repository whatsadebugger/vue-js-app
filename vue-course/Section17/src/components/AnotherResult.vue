<template>
<div>
  <p>Counter is: {{ countDoubled }}</p>
  <p>Counter Clicks is: {{ countString }}</p>
</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      'countDoubled',
      'countString',
    ])
  }
};
</script>