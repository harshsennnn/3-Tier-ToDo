import React from "react";

function ToDoItem(props) {
  return (
    <li className="Item">
      <span>
        <input type="checkbox" className="underline"/>
        <span>{props.text}</span>
        </span>
        <p>...</p>
    </li>
  );
}

export default ToDoItem;
