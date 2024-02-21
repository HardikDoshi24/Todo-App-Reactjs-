import React from 'react'
import {TodoItem} from "../Components/TodoItem";

export default function Todos(props) {
  let myStyle = {
    minHeight : "70vh"
  }
  return (
    <div className='container my-3' style={myStyle}>
      <h3>Todos List</h3>

      {props.todo.length == 0 ? "No Todos to Display" :
      props.todo.map((todo) => {
        return <TodoItem todo = {todo} key = {todo.sno} onDelete = {props.onDelete}/>
      })
      }
    </div>
  )
}
