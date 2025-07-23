import React from 'react'

function TodoList(props) {
  return (
    <li>
        {props.item}
 <span>
    <i class="fa-solid fa-trash" onClick={e=>{
        props.deleteItem(props.index)
    }}></i>
 </span>
    </li>
  )
}

export default TodoList