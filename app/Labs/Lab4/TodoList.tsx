"use client";
import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
function TodoList() {
  const [todo, setTodo] = React.useState({ title: "New Todo", done: false });
  const [todos, setTodos] = React.useState([
    { title: "Learn React", done: false },
    { title: "Learn Node", done: false },
  ]);

  const addTodo = () => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setTodo({ title: "New Todo", done: false });
  };

  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div id="wd-todo-list">
      <h2>Todo List</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <input
            type="text"
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            className="form-control"
          />
          <button onClick={addTodo} className="btn btn-primary">
            Add
          </button>
        </li>
        {todos.map((item, index) => (
          <li key={index} className="list-group-item">
            <input type="checkbox" checked={item.done} readOnly />
            {item.title}
            <button
              onClick={() => deleteTodo(index)}
              className="btn btn-danger float-end"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default TodoList;
