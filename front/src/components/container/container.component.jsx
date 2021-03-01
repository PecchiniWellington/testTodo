import React, { Component } from "react";
import "./container.style.scss";

export default function Container({ children, customClassName }) {
  return <div className={customClassName}>{children}</div>;
}
