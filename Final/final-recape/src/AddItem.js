import React from 'react'
import { useRef } from 'react'

const AddItem = ({newItem,setNewItem,handleSubmit}) => {

  const inputRef=useRef()
  
  return (
    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="AddItem">Add Item</label>
        <input type="text"
        autoFocus
        id='addItem'
        placeholder='Add Item'
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
        ref={inputRef}

        
        />
        <button type='submit'onClick={()=> inputRef.current.focus()}>Add</button>
    </form>
  )
}

export default AddItem
