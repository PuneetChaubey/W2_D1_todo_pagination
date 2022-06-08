import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

const TodoApp = () => {
   const [addTodo, setAddTodo] = useState("")
    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1)
    const [lastCount, setLastCount] = useState(0)
    const [list, setList] = useState(2)
console.log("page:",list)
    useEffect(() => {
  const getTodos = async ()=>{

    let res = await fetch(`http://localhost:8080/data?_page=${page}&_limit=${list}`);
    let data = await res.json();
    setLastCount(data.length)
    setTodos([...data]);
  }      
  getTodos();
  
    }, [page,list])
    
const addInfo = ()=>{
 fetch("http://localhost:8080/data",{
   method : 'POST',
   headers: {
     'Content-Type': 'application/json',
   },
   body: JSON.stringify(
     {
      "value":addTodo ,
      "isCompleted": "true"
     })
    })
     .then((res)=>{
    return res.json();
     })
     .then((res)=>{
       console.log(res);
       setTodos([...todos, res])
     })
 
   

}

    




  return (
    <div>TodoApp
        <TodoInput 
        setAddTodo={setAddTodo}
         addTodo={addTodo} 
         addInfo={addInfo} 
         />
        <TodoList todos={todos} />
        <Pagination
        setPage={setPage}
        page={page}
        setList={setList}
        lastCount={lastCount}
        list={list}
        />
    </div>
  )
}

export default TodoApp