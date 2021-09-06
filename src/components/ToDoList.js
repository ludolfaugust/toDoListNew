import React, { useState } from "react";
import TodoForm from "./TodoForm";
import ToDo from "./ToDo";

function ToDoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    //this function is to delete spaces in the input
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    setTodos(newTodos);
  };
  //edit button//
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };
  //remove Button//
  const removeTodo = (id) => {
    const removeARR = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeARR);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Was liegt heute an? </h1>
      <TodoForm onSubmit={addTodo} />
      <ToDo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default ToDoList;
