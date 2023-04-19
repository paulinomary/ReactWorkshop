import React from "react";

export const Button = ({ onClick, text, variant }) => (
  <button onClick={onClick} className={`btn-${variant}`}>
    {text}
  </button>
);
