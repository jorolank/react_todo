import "./styles.css";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import TodoPage from "./todoPage";
import EditForm from "./editForm";

export default function App() {
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <TodoPage>
        <TodoForm />
        <TodoList />
        <EditForm />
      </TodoPage>
    </div>
  );
}
