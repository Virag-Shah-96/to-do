import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoList } from "./To-do";
import { BigTodo } from "./Big-Todo";

function App() {
  return (
    <>
      <div className="App bg-red-300">
        <TodoList />
      </div>
      <div className="p-8">
        <BigTodo />
      </div>
    </>
  );
}

export default App;
