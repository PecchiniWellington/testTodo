import React from "react";
import "./custom-input.style.scss";

import { v4 as uuidv4 } from "uuid";

export const CustomInput = ({
  label,
  name,
  placeholder,
  type,
  changeValue,
  value,
}) => {
  const idForInput = uuidv4();
  return (
    <div>
      <label className="labels-tasklist" htmlFor={`${label}${idForInput}`}>
        {label}
      </label>
      <input
        type={type}
        id={`${label}${idForInput}`}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => changeValue(e)}
      />
    </div>
  );
};
