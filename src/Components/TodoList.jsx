import React, { useState } from 'react'
import style from "../Styles/TodoList.module.css"
import { v4 as uuidv4 } from 'uuid';
const TodoList = ({todos}) => {


  return (
    <div>
    {
        todos.map((p)=>{
       
      return <div key={uuidv4()} className={style.todos_div} >
          <input type="checkbox"/>
          <h3>{p.value}</h3>
          <button>x</button>

      </div>
           
        })
    }


    </div>
  )
}

export default TodoList