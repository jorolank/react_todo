import React, { useState, createContext } from "react";

export const Context = createContext(null);

const TodoPage = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const [data, setData] = useState("");
  const [index, setIndex] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);
  //edit handler
  const handleEdit = (id) => {
    const filterTodos = todo.filter((item, index) => {
      return index === id;
    });
    setData(filterTodos, setIndex(id), setShowEditForm(true));
    return filterTodos;
  };
  //delete handler
  const handleRemove = (i) => {
    const removeTodo = todo.filter((_, index) => {
      return index !== i;
    });
    setTodo(removeTodo, setShowEditForm(false));
    return removeTodo;
  };

  const todoContext = {
    setTodo,
    todo,
    handleEdit,
    data,
    setData,
    handleRemove,
    setIndex,
    index,
    showEditForm,
    setShowEditForm
  };

  return <Context.Provider value={todoContext}>{children}</Context.Provider>;
};
export default TodoPage;
