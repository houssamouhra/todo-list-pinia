<template>
  <div v-for="todo in todoList" :key="todo.id" class="item">
    <div class="content">
      <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
      <div class="icons">
        <span @click.stop="toggleCompleted(todo.id)" class="check-mark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </span>
        <span @click="deleteTodo(todo.id)" class="x"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTodoListStore } from "@/stores/todoList";
import { storeToRefs } from "pinia";

const store = useTodoListStore();

const { todoList } = storeToRefs(store);

const { toggleCompleted, deleteTodo } = store;
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
}

.content {
  display: flex;
  align-items: center;
  width: 100%;
}

.completed {
  text-decoration: line-through;
}

.content span {
  flex-grow: 1;
  min-width: 80px;
  word-wrap: break-word;
}

.icons {
  display: flex;
  gap: 1px;
}

svg {
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 50px;
  height: 50px;
}

.check-mark {
  color: #2f6089;
}

.x {
  color: #d1495b;
}
</style>
