import { useState } from "react";
import "./App.css";
import uuid from "react-uuid";
import { Input } from "./componets/Input";
import TodoList from "./componets/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      title: "제목",
      contents: "내용",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목2",
      contents: "내용2",
      isDone: true,
    },
    {
      id: uuid(),
      title: "제목3",
      contents: "내용3",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목4",
      contents: "내용4",
      isDone: false,
    },
  ]);

  return (
    <div>
      <header
        style={{
          backgroundColor: "#f5b8ae",
          padding: "10px",
        }}
      >
        헤더입니다.
      </header>
      <main
        style={{
          backgroundColor: "#f5e0ae",
          padding: "10px",
        }}
      >
        <Input todos={todos} setTodos={setTodos} />
        <div>
          <h1>list영역</h1>
          <TodoList todos={todos} setTodos={setTodos} listIsDone={false} />
          <TodoList todos={todos} setTodos={setTodos} listIsDone={true} />
        </div>
      </main>
      <footer
        style={{
          backgroundColor: "#aef5ee",
          padding: "10px",
        }}
      >
        푸터입니다.
      </footer>
    </div>
  );
}

export default App;
