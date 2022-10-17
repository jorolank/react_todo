import React from "react";

const CustomInput = ({ label, onChange, value, type, onClick, name }) => {
  return (
    <>
      <label>{label}</label>
      <input type={type} onChange={onChange} value={value} />
      <button onClick={onClick}>{name}</button>
    </>
  );
};
export default CustomInput;
