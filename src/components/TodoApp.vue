<template>
  <div class="todo-app">
    <h1>To Do List</h1>
    <todo-form></todo-form>
    <todo-list></todo-list>
  </div>
</template>

<script setup>
import TodoForm from "./TodoForm.vue";
import TodoList from "./TodoList.vue";
</script>

<style scoped>
.todo-app {
  padding: 5vh;
  min-height: 100vh;
  width: 30vw;
  background-color: #f7f9fc;
}
</style>
