<template>
  <div class="col-xm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model.number="quantity"
            :class="{danger: insufficientQuantity}"
            >
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            @click="sellStock"
            :disabled="quantity <= 0 || insufficientQuantity"
            >Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>


<script>
// lets switch it up and use mapactions to reduce some boiler plate
import { mapActions } from "vuex";

export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),
    sellStock() {
      const order = {
        quantity: this.quantity,
        stockId: this.stock.id,
        stockPrice: this.stock.price
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
}
</script>
