import React from "react";

function Button({ onClick }) {
  return (
    <button className="Button" onClick={onClick}>
      Add Task
    </button>
  );
}

export default Button;
