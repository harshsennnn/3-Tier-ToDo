import React,{useState} from 'react'

function TodoInput() {
  const [inputText, setInputText] = useState('');
  return (
    <div>
      <input type="text" placeholder='Enter your Task' onChange={(e) => setInputText(e.target.value)}/>
      <button>+</button>
      <div className='text-white'>{inputText}</div>
    </div>
  )
}

export default TodoInput