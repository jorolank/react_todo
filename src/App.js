import "./styles.css";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import TodoPage from "./components/todoPage";

export default function App() {
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <TodoPage>
        <TodoForm />
        <TodoList />
      </TodoPage>
    </div>
  );
}
