import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodoListStore = defineStore("todoList", () => {
  const todoList = ref([]);
  const id = ref(0);

  const addTodo = (item) => {
    todoList.value.push({ item, id: id.value++, completed: false });
  };

  const deleteTodo = (itemId) => {
    todoList.value = todoList.value.filter((object) => {
      return object.id !== itemId;
    });
  };

  const toggleCompleted = (idToFind) => {
    const todo = todoList.value.find((obj) => obj.id === idToFind);
    if (todo) {
      todo.completed = !todo.completed;
    }
  };

  return { todoList, id, addTodo, deleteTodo, toggleCompleted };
});
