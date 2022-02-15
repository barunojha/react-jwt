import React from "react";
import "../../../App.css";

const InputField = (props) => {
  const { label, name, value, onChange, type } = props;

  return (
    <div className="inputField">
      <label htmlFor={name} className="block">
        {label}
      </label>

      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={true}
        className="inputTextField"
      />
    </div>
  );
};

export default InputField;