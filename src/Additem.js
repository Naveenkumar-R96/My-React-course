import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Additem = ({newItem,setNewItem,handleSubmit}) => {
  return (
   <form action="" className='addForm' onSubmit={handleSubmit}>
    <label htmlFor="addItem">Add Item</label>
    <input type="text " autoFocus id='addItem' placeholder='Add Item' required value={newItem}
    onChange={(e)=> setNewItem(e.target.value)} />
    <button type='submit' aria-label='Add item'> <FaPlus/></button>
   </form>
  )
}

export default Additem
