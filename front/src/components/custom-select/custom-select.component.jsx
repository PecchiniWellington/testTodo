import React from "react";
import "./custom-select.style.scss";

import { v4 as uuidv4 } from "uuid";

export const CustomSelect = ({
  label,
  name,
  values,
  changeValue,
  stateValue,
}) => {
  /**
   * *ricordarsi di far mandare values dal backend
   */

  const idForInput = uuidv4();

  const isOptionSelected = () => {
    return values.map((value) => {
      return (
        <option key={uuidv4()} value={value}>
          {value}
        </option>
      );
    });
  };
  return (
    <div>
      <label htmlFor={`${label}${idForInput}`}>{label}</label>
      <select
        id={`${label}${idForInput}`}
        name={name}
        value={stateValue}
        onChange={(e) => changeValue(e)}>
        {isOptionSelected()}
      </select>
    </div>
  );
};
