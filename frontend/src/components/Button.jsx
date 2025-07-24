import React, {useState}from "react";

function Button() {
 
  return (
    <button className="Button" onClick={() => alert()}>
      Add Task
    </button>
  );
}

export default Button;
