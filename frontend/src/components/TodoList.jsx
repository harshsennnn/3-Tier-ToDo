import React from 'react'

function TodoList(props) {
  return (
    <li>
        {props.item}
 <span>
    <i class="fa-solid fa-trash"></i>
 </span>
    </li>
  )
}

export default TodoList