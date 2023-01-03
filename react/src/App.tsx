import { useState } from 'react'
import './App.css'

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

  return (
    <div className="App">
      <h1>Todo List</h1>
      <ul>
        {uncompletedTodos.map(todo => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.done} />
            <span>{todo.text}</span>
          </li>
          ))}
      </ul>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}

export default App
