import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ToDoItem from './components/ToDoItem'
import Button from './components/Button'

function App() {
  return (
    <div className='container'>
      <Header />
      <ToDoItem text="Eat" />
      <ToDoItem text="Sleep" />
      <ToDoItem text="Code" />
      <ToDoItem text="Repeat" />
      <ToDoItem text="Exercise " />
      <Button />
    </div>
  );
}

export default App;
