import React from "react";

function ToDoItem() {
  return (
    <li className="Item">
      <span>
        <input type="checkbox" className="underline"/>
        <span>Eat</span>
        </span>
        <p>...</p>
    </li>
  );
}

export default ToDoItem;
