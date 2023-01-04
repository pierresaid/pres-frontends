<script lang="ts">
export default {
  data() {
    return {
      todos: [
        {
          id: 1,
          text: "Learn Vue.js",
          done: false,
        },
        {
          id: 2,
          text: "Learn TypeScript",
          done: false,
        },
        {
          id: 3,
          text: "Learn Vite",
          done: false,
        },
      ],
      text: "",
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        id: this.todos.length + 1,
        text: this.text,
        done: false,
      });
      this.resetText();
    },
    resetText() {
      this.text = "";
    },
  },
  computed: {
    uncompletedTodos() {
      return this.todos.filter((todo) => !todo.done);
    },
  },
};
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
