import React from "react";

function ToDoList({ tasks }) {
  return (
    <div className="ToDoList">
      <ul >
        {tasks.map((task) => (
        <p key={task.id} >{task.title}</p>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
