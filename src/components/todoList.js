import React, { useContext } from "react";
import { Context } from "./todoPage";

const TodoList = () => {
  const { todo, handleEdit, handleRemove, index: id } = useContext(Context);
  return (
    <ul>
      {todo.length
        ? todo.map((item, index) => {
            return (
              <li key={index}>
                {item}
                {id !== index ? (
                  <button onClick={() => handleEdit(index)}>Update</button>
                ) : (
                  ""
                )}
                <button onClick={() => handleRemove(index)}>Delete</button>
              </li>
            );
          })
        : "No Todos"}
    </ul>
  );
};
export default TodoList;
