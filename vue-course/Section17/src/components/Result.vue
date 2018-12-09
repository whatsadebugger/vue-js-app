<template>
<div>
  <p>Counter Doubled is: {{ countDoubled }}</p>
  <p>Counter Clicks: {{ countString }}</p>
</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      'countDoubled',
      'countString'
    ])
  }
};
</script>