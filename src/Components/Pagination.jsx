import React from 'react'

const Pagination = ({setPage,page,lastCount,setList,list}) => {
  return (
    <div>
        <button 
        disabled= {page<=1}
        onClick={()=>setPage(page-1)} 
        >
            {`<`}
        </button>
        <select onChange={(e)=>{setList(Number(e.target.value))}}>
            <option  value={2}  >2</option>
            <option  value={4}  >4</option>
            <option  value={6}  >6</option>
        </select>
        <button 
        disabled={page*lastCount<list} 
        onClick={()=>setPage(page+1)}
        >
            {`>`}
        </button>
    </div>
  )
}

export default Pagination