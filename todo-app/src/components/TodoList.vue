<template>
   <div>
    <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
    <todo v-for="(t, i) in todos" :key="i" :todo="t"
    @delete-todo="deleteTodo" @complete-todo="completeTodo($event)"/>
   </div>
</template>

<script type = "text/javascript" >
import Todo from './Todo';

export default {
  props: ['todos'],
  components: {
    Todo,
  },
  methods: {
    deleteTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
    completeTodo(index) {
      this.todos[index].done = true;
    },
  },
};

</script>

<style>
</style>
