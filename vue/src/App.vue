<script setup lang="ts">
import { ref, computed } from "vue";

const todos = ref([
  { id: 1, text: "Hello", done: true },
  { id: 2, text: "Hallo", done: false },
  { id: 3, text: "Bonjour", done: false },
]);

const uncompletedTodos = computed(() => {
  return todos.value.filter((todo) => !todo.done);
});

const text = ref("");
function resetText() {
  text.value = ""; // Direct mutation
}

function addTodo() {
  todos.value.push({
    id: todos.value.length + 1,
    text: text.value,
    done: false,
  });
  resetText();
}
</script>

<template>
  <main>
    <h1>Vue.js</h1>
    <ul>
      <li v-for="todo in uncompletedTodos" :key="todo.id">
        <input type="checkbox" v-model="todo.done" />
        {{ todo.text }}
      </li>
    </ul>
    <input type="text" v-model="text" />
    <button @click="addTodo">Add Todo</button>
  </main>
</template>

<style>
main {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
}
</style>
