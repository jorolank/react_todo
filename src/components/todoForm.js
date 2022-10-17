import React, { useContext } from "react";
import { Context } from "./todoPage";
import CustomInput from "../common/customInput";

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
    <form>
      <h2>{!showEditForm ? "Add Todo" : "Edit Todo"}</h2>
      <CustomInput
        label={!showEditForm ? "Add Todo: " : "Edit Todo : "}
        value={!showEditForm ? addInputData : editInputData}
        onChange={!showEditForm ? handleOnchange : handleChangeEdit}
        type="text"
        name="Submit"
        onClick={!showEditForm ? handleSubmit : handleSubmitEdit}
      />
    </form>
  );
};
export default TodoForm;
