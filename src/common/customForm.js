import React from "react";

const CustomForm = ({ label, onChange, value, type, onClick, name }) => {
  return (
    <form>
      <label>{label}</label>
      <input type={type} onChange={onChange} value={value} />
      <button onClick={onClick}>{name}</button>
    </form>
  );
};
export default CustomForm;
