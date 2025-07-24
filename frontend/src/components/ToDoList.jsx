import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ tasks }) {
  return (
    <div className="ToDoList">
      <ul >
        {tasks.map((task) => (
          <ToDoItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
