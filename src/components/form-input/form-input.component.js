import React from "react";

import "./form-input.styles.scss";

const FormInput = function ({ handleChange, label, name, type, value }) {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        name={name}
        type={type}
        value={value}
      />
      {label ? (
        <label className={`${value.length ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
