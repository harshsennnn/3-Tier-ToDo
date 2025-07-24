import React from "react";

function ToDoItem(props) {
  return (
    <li className="Item">
        <input type="text" placeholder="Enter your task" className="input"/>
    </li>
  );
}

export default ToDoItem;
