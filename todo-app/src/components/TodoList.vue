<template>
   <div>
    <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
    <todo v-for="(t, i) in todos" :key="i" :todo="t"/>
   </div>
</template>

<script type = "text/javascript" >
import Todo from './Todo';

export default {
  props: ['todos'],
  components: {
    Todo,
  },
};

</script>

<style>
</style>
