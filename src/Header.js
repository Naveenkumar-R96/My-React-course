
import { useState } from 'react'
import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import "./index.css"

const Header = () => {


  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "practise Coding"
    },
    {
      id: 2,
      checked: false,
      item: "Play cricket"
    },
    {
      id: 3,
      checked: false,
      item: "Read about ai"
    }
  ])

  const handleCheck = (id) => {
    const listItems = items.map((content1) =>
      content1.id === id ? { ...content1, checked: !content1.checked } : content1)
    setItems(listItems);
    localStorage.setItem("todo_list",JSON.stringify(listItems))
  }
  const handleTrash = (id) => {
    
    const listItems = items.filter((item)=>
    item.id!==id)
    setItems(listItems)
  }

  return (
    <header>
       
      <ul>

        {items.map((content) => (
          <li className='item' key={content.id}>
            <input
              type="checkbox"
              checked={content.checked}
              onChange={() => handleCheck(content.id)}
            />
            <label htmlFor="" 
            onDoubleClick={()=> handleCheck(content.id)}
           
            >{content.item}</label>
            <FaTrashAlt
              role='button'
              tabIndex='0'
              className='trash'
              onDoubleClick={() => handleTrash(content.id)}
            />
          </li>
          
        ))}
        
      </ul>
       



    </header>

  )

}



export default Header