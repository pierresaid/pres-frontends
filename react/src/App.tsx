import { useMemo, useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Hello", done: true },
    { id: 2, text: "Hallo", done: false },
    { id: 3, text: "Bonjour", done: false },
  ])

  const uncompletedTodos = todos.filter(todo => !todo.done)
  // memoized
  // const uncompletedTodos = useMemo(() => todos.filter(todo => !todo.done), [todos])

  const [text, setText] = useState("")
  function resetText() {
    setText("")
  }

  function addTodo() {
    const newTodo = { id: todos.length + 1, text, done: false }
    setTodos([...todos, newTodo])
    resetText()
  }

  function toggleTodo(id: number) {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    )
    setTodos(newTodos)
  }

  return (
    <main>
      <h1>React.js</h1>
      <ul>
        {uncompletedTodos.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <input type="checkbox" checked={todo.done} onChange={() => toggleTodo(todo.id)} />
          </li>
        ))}
      </ul>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
    </main>
  )
}

export default App
