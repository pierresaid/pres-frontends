<script lang="ts">
  let todos = [
    { id: 1, text: "Hello", done: true },
    { id: 2, text: "Hallo", done: false },
    { id: 3, text: "Bonjour", done: false },
  ];

  $: uncompletedTodos = todos.filter((todo) => !todo.done);

  let text = "";
  function resetText() {
    text = "";
  }

  function addTodo() {
    todos = [...todos, { id: todos.length + 1, text, done: false }];
    resetText();
  }
</script>

<main>
  <h1>Svelte</h1>
  <ul>
    {#each uncompletedTodos as todo}
      <li>
        <input type="checkbox" bind:checked={todo.done} />
        {todo.text}
      </li>
    {/each}
  </ul>
  <input type="text" bind:value={text} />
  <button on:click={addTodo}>Add todo</button>
</main>

<style>
  main {
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
  }
</style>
