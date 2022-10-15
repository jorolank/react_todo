import React, { useContext } from "react";
import { Context } from "./todoPage";

const EditForm = () => {
  const {
    data,
    setData,
    setTodo,
    todo,
    index,
    showEditForm,
    setShowEditForm
  } = useContext(Context);
  const handleChange = (e) => {
    const { value } = e.target;
    setData(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const copyTodo = [...todo];
    copyTodo.splice(index, 1, data);
    setTodo(copyTodo, setShowEditForm(false));
  };
  return (
    <>
      {showEditForm && (
        <form>
          <h2>Edit Todo</h2>
          <label>Edit Todo: </label>
          <input onChange={handleChange} value={data} type="text" />
          <button onClick={handleSubmit}>Edit</button>
        </form>
      )}
    </>
  );
};

export default EditForm;
