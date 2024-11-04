
import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
const Content = () => {

    const [items, setItems] = useState(
        [
            {
                id:1,
                checked:false,
                item:'lakdf'
            },
            {
                id:2,
                checked:true,
                item:'lakdf'
            },
            {
                id:3,
                checked:true,
                item:'lakdf'
            },
        ]
    )

    const handleCheck=(id)=>{
        const listItems=items.map(item=>item.id===id ? {...item,checked:!item.checked}: item)
        setItems(listItems)
        localStorage.setItem('todo_list',JSON.stringify(listItems))
    }
    const handleDelete=(id)=>{
        const listItems=items.filter(item=>item.id!==id)
        setItems(listItems)
        localStorage.setItem('todo_list',JSON.stringify(listItems))
    }

    return (
        <main>

            {(items.length) ?
            <ul>
               
                {items.map(item=>(
                    <li key={item.id}>
                        <input type="checkbox"
                        checked={item.checked} 
                        onChange={()=>handleCheck(item.id)}
                        />
                        <label htmlFor="" onDoubleClick={()=>handleCheck(item.id)} style={(item.checked )? {textDecoration:"line-through"} : null}>{item.item}</label>
                        <span onClick={()=>handleDelete(item.id)}><FaTrash/></span>
                    </li>
                ))}
            </ul>
             : (<p>
                your page is empty
            </p>) }
            

            

        </main>
    )
}

export default Content
