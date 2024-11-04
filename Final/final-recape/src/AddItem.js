import React from 'react'

const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="AddItem">Add Item</label>
        <input type="text"
        autoFocus
        id='addItem'
        placeholder='Add Item'
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
        
        />
        <button type='submit' onClick={handleSubmit}>Add</button>
    </form>
  )
}

export default AddItem
