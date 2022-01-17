import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  // TODO: Implement useState hook to manage todos

  // Get all todos from local storage

  // Add a todo to the list of todos when the form is submitted
  // in addition to clear the input field after the todo is added
  // moreover add the local storage
  const addTodo = (todo) => {
    return;
  };

  // Update a todo in the list and save to local storage
  const updateTodo = (todoId, newValue) => {};

  // Remove a todo from the list and save to local storage (if available)
  const removeTodo = (id) => {};

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={[]} removeTodo={removeTodo} updateTodo={updateTodo} />
    </>
  );
}

export default TodoList;
