import React, { useState, useEffect } from "react";
import ToDoList from "./components/ToDoList";
import ToDoItem from "./components/ToDoItem";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:8080/tasks");
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);
  
  const addTask = async () => {


    if (task.trim() === "") return;

    await fetch("http://localhost:8080/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: task }),
    });

    setTask("");     
    fetchTasks();     
  };

  return (
    <div className="todo-container">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task"
        className="input"
      />
       <button className="Button" onClick={addTask}>
      Add Task
    </button>
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;
