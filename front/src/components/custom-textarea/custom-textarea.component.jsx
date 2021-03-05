import React from "react";
import "./custom-textarea.styles.scss";

import { v4 as uuidv4 } from "uuid";

export const CustomTextArea = ({
  label,
  name,
  placeholder,
  changeValue,
  value,
}) => {
  const idForTextArea = uuidv4();
  return (
    <div>
      <label className="labels-tasklist" htmlFor={`${label}${idForTextArea}`}>
        {label}
      </label>
      <textarea
        id={`${label}${idForTextArea}`}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => changeValue(e)}
      ></textarea>
    </div>
  );
};
