import React, { useContext, useState } from "react";
import { Context } from "./todoPage";
const TodoForm = () => {
  const { setTodo, todo } = useContext(Context);
  const [input, setInput] = useState("");

  const handleOnchange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo([...todo, input]);
    setInput("");
  };

  return (
    <form>
      <h2>Add Todo</h2>
      <label>Add Todo: </label>
      <input value={input} onChange={handleOnchange} type="text" />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};
export default TodoForm;
