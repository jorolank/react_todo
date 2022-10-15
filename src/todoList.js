import React, { useContext } from "react";
import { Context } from "./todoPage";

const TodoList = () => {
  const { todo, handleEdit, handleRemove } = useContext(Context);
  return (
    <ul>
      {todo.map((item, index) => {
        return (
          <li key={index}>
            {item}
            <button onClick={() => handleRemove(index)}>Delete</button>
            <button onClick={() => handleEdit(index)}>Update</button>
          </li>
        );
      })}
    </ul>
  );
};
export default TodoList;
