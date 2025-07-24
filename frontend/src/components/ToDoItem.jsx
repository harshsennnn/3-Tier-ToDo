import React from "react";

function ToDoItem({ task }) {
  return (
    <li className="Item">
      <span>{task.title}</span>
    </li>
  );
}

export default ToDoItem;
