import React, { useState } from "react";

interface Item {
  id: number;
  text: String;
  completed: boolean;
}

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Item[]>([]);
  const [input, setInput] = useState<string>("");
  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };
  const handleClick = () => {
    if (input === "") {
      alert("Please Enter Todo First");
    } else {
      const newTodo: Item = {
        id: Math.random() * 1000,
        text: input,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };
  const deleteTodo = (id: number) =>
    setTodos(todos.filter((_item: any) => _item.id !== id));
  return (
    <div className="main-container p-10 text-center">
      <h1 className="text-5xl m-5">Todo-List</h1>
      <ul>
        {todos.map((todo) => (
          <div className="flex justify-center" key={todo.id}>
            <li
              onClick={() => handleToggle(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </li>
            <button
              className="border px-4 text-xs ms-4"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
      <input
        className="border px-4 m-4"
        type="text"
        placeholder="Add To-do"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="border px-4" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};
