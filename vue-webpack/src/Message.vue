<template>
  <div>
    <h1>{{ message }}</h1>
    <h1>{{ reversedMessage }}</h1>
    <app-input :msg="message" @messageChanged="message = $event"></app-input>
  </div>

</template>

<script>
import Input from './Input.vue'
export default {
  data() {
    return {
      message: 'This is a great message!'
    }
  },
  components: {
    'app-input': Input
  },
  computed: { // computer properties are default getter only
    reversedMessage () {
      return this.message.split('').reverse().join('');
    }
  }
}
</script>
