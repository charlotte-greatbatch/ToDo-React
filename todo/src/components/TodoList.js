import React, { useState } from 'react'
import ToDoForm from './TodoForm'

function TodoList() {
  const [todos, setTodos] = useState([])

  const addToDo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }
    const newTodos = [todo, ...todos]

    setTodos(newTodos)
  }
  return (
    <div>
      <h1>What's the plan for today?</h1>
      <ToDoForm onSubmit={addToDo} />
    </div>
  )
}

export default TodoList
