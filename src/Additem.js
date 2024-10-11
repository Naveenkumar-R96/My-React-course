import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'


const Additem = ({ newItem, setNewItem, handleSubmit }) => {

  const itemRef = useRef()
  return (
    <form action="" className='addForm' onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input type="text " autoFocus id='addItem' placeholder='Add Item' required value={newItem} ref={itemRef}
        onChange={(e) => setNewItem(e.target.value)} />
      <button type='submit' aria-label='Add item' onClick={() => itemRef.current.focus()} > <FaPlus /></button>
    </form>
  )
}

export default Additem
