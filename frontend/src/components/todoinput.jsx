import React,{useState} from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState('');
  return (
    <div>
      <input type="text" placeholder='Enter your Task' onChange={(e) => setInputText(e.target.value)}
      value={inputText}/>
      <button onClick={()=>{props.addList(inputText)
        setInputText('');
      }}>+</button>
      <div className='text-white'>{inputText}</div>
    </div>
  )
}

export default TodoInput