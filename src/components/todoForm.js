import React, { useContext } from "react";
import { Context } from "./todoPage";
import CustomForm from "../common/customForm";

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

  return (
    <>
      <h2>{!showEditForm ? "Add Todo" : "Edit Todo"}</h2>
      <CustomForm
        label={!showEditForm ? "Add Todo: " : "Edit Todo : "}
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
