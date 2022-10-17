import React, { useState, createContext } from "react";

export const Context = createContext(null);

const TodoPage = ({ children }) => {
  const [todo, setTodo] = useState([]);
  //EDIT STATE
  const [editInputData, setEditInputData] = useState("");
  //ADD STATE
  const [addInputData, setAddInputData] = useState("");
  const [index, setIndex] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);
  //add handler
  const handleOnchange = (e) => {
    const { value } = e.target;
    setAddInputData(value);
  };
  //add submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo([...todo, addInputData]);
    setAddInputData("");
  };
  //edit filter by id handler
  const handleEdit = (id) => {
    const filterTodos = todo.filter((item, index) => {
      return index === id;
    });
    setEditInputData(filterTodos, setIndex(id), setShowEditForm(true));
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
  //edit onchange handler
  const handleChangeEdit = (e) => {
    const { value } = e.target;
    setEditInputData(value);
  };
  //edit submit button handler
  const handleSubmitEdit = (e) => {
    e.preventDefault();
    const copyTodo = [...todo];
    copyTodo.splice(index, 1, editInputData);
    setTodo(copyTodo, setShowEditForm(false));
  };

  const todoContext = {
    setTodo,
    todo,
    handleEdit,
    editInputData,
    setEditInputData,
    handleRemove,
    setIndex,
    index,
    showEditForm,
    setShowEditForm,
    addInputData,
    setAddInputData,
    handleOnchange,
    handleSubmit,
    handleChangeEdit,
    handleSubmitEdit
  };

  return <Context.Provider value={todoContext}>{children}</Context.Provider>;
};
export default TodoPage;
