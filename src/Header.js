
import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import "./index.css"
import itemsList from './itemsList';

const Header = ({items,handleCheck,handleTrash}) => {


  
  return (

    <> 

      {(items.length ) ? (
       
          <ul>
      
          {items.map((content) => (
            <li className='item' key={content.id}>
              <input
                type="checkbox"
                checked={content.checked}
                onChange={() => handleCheck(content.id)}
              />
              <label htmlFor=""
                onDoubleClick={() => handleCheck(content.id)}
      
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
        
      ) : (<p style={{marginTop:'2rem'}}>Your List is empty</p>)
    
    }

        

      
    
       



    </>

  )

}



export default Header