import React from 'react'
import { FaTrash } from 'react-icons/fa'
const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <main>
         <li key={item.id}>
                       <input type="checkbox"
                       checked={item.checked} 
                       onChange={()=>handleCheck(item.id)}
                       />
                       <label htmlFor="" onDoubleClick={()=>handleCheck(item.id)} style={(item.checked )? {textDecoration:"line-through"} : null}>{item.item}</label>
                       <span onClick={()=>handleDelete(item.id)}><FaTrash/></span>
                   </li>
    </main>
  )
}

export default LineItem
