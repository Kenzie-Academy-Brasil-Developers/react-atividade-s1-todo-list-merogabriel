import "./App.css";
import { useState } from "react";
import Forms from "./components/Forms/Forms";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function handleTodo(item) {
    setTodos(todos.filter((todos) => todos !== item));
  }

  return (
    <div className="App">
      <header className="App-header">
        <Forms addTodo={addTodo}></Forms>
        <TodoList handleTodo={handleTodo} todos={todos}></TodoList>
      </header>
    </div>
  );
}

export default App;