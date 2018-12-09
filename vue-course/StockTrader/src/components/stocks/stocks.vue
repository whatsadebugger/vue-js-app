<template>
  <div>
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>

<script>
import stock from './stock.vue'
export default {
  components: {
    appStock: stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
}
</script>

