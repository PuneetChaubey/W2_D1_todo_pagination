import React from 'react'

const TodoInput = ({setAddTodo,addTodo,addInfo}) => {

  return (
    <div>
        <input type="text" value={addTodo} placeholder="Enter todos here .." onChange={(e)=>setAddTodo(e.target.value)} />
        <button onClick={()=>{
         addInfo()
         setAddTodo("")

        }}>+</button>
    </div>
  )
}

export default TodoInput