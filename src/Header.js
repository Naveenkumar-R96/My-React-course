
import { useState } from 'react'
import React from 'react'

const Header = () => {


  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "practise Coding"
    },
    {
      id: 1,
      checked: true,
      item: "Play cricket"
    },
    {
      id: 1,
      checked: true,
      item: "Read about ai"
    }
  ])
    
  

  return (
    <header>
      <ul>
       
        {items.map((item)=>(
          <li>
            <input type="checkbox"
            checked={item.checked} />
            <label htmlFor=""></label>
          </li>
        ))}
       
      </ul>


    </header>

  )

}



export default Header