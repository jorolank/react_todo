import React, { useContext } from "react";
import { Context } from "./todoPage";
import CustomForm from "../common/customForm";
import {constantTodo} from "../constants/const"

const TodoForm = () => {
  const {
    showEditForm,
    editInputData,
    addInputData,
    handleOnchange,
    handleSubmit,
    handleChangeEdit,
    handleSubmitEdit
  } = useContext(Context);

  const {addTodo, editTodo} = constantTodo;

  return (
    <>
      <h2>{!showEditForm ? addTodo : editTodo}</h2>
      <CustomForm
        label={!showEditForm ? `${addTodo}: `: `${editTodo}: `}
        value={!showEditForm ? addInputData : editInputData}
        onChange={!showEditForm ? handleOnchange : handleChangeEdit}
        type="text"
        name="Submit"
        onClick={!showEditForm ? handleSubmit : handleSubmitEdit}
      />
    </>
  );
};
export default TodoForm;
