import React, { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import TodoInput from './components/todoinput'

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    setListTodo([...listTodo, inputText]);
  }

  return (
    <>
      <div className='background-white h-screen flex items-center justify-center'>
        <TodoInput addList={addList}/>
        <h1>ToDo App</h1>
        <hr />
        {listTodo.map((listItem, i) =>{
          return (<TodoList key={i} item={listItem}/>)
        } )}
      </div>
    </>
  )
}

export default App
