import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="">ToDo List App</h1>
        <form className='width:800px'>
          <input type="text" placeholder='Enter your task here
          ' /> <button>Add+</button>
        </form>
      </div>
    </>
  )
}

export default App
