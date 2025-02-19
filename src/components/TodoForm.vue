<template>
  <div>
    <form @submit.prevent="addItemAndClear(todo)" action="">
      <input type="text" v-model="todo" /><button>Add</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTodoListStore } from "@/stores/todoList";

const todo = ref("");

const store = useTodoListStore();

function addItemAndClear(item) {
  if (item.length === 0) {
    return;
  }
  store.addTodo(item);
  todo.value = "";
}
</script>

<style scoped>
button {
  font-size: 20px;
  border: 1px solid #2d3f50;
  margin-left: 30px;
  padding: 10px 10px;
  border: none;
  border-width: 1px;
  font-weight: 800;
  color: white;
  border-radius: 5px;
  background-color: #2f6089;
  cursor: pointer;
}

button:hover {
  box-shadow: 1px 1px 6px 5px #e6f1ff;
}

input {
  all: unset;
  margin-top: 25px;
  margin-bottom: 15px;
  height: 20px;
  width: 50%;
  padding: 10px;
  font-size: 20px;
  border: 1px solid #2e6088;
  border-width: 1px;
  border-radius: 8px;
  background-color: #e6f1ff;
}
</style>
