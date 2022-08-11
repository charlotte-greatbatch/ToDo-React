import React, { useState } from 'react'
import Todo from './Todo'
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

  const updatedToDos = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    )
  }

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id)

    setTodos(removeArr)
  }

  const completeTodo = (id) => {
    let updatedToDos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedToDos)
  }

  return (
    <div>
      <h1>What's the plan for today?</h1>
      <ToDoForm onSubmit={addToDo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updatedToDos={updatedToDos}
      />
    </div>
  )
}

export default TodoList
