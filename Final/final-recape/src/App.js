import React from 'react'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState,useEffect } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

const App = () => {

  const [items, setItems] = useState(
     []
  )

  const [newItem,setNewItem]=useState('')
  
  const[search,setSearch]=useState('')

  useEffect(()=>{
    JSON.parse(localStorage.getItem('todo_list') ) 
  },[])

  const addItem =(item)=>{
    const id=items.length ? items[items.length -1].id+1 : 1;
    const addNewItem={id,checked:false,item}
    const listItems=[...items,addNewItem]
    setItems(listItems)
    localStorage.setItem('todo_list',JSON.stringify(listItems))
  }


  const handleCheck = (id) => {
    const listItems = items.map(item => item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItems)
    localStorage.setItem('todo_list', JSON.stringify(listItems))
  }
  const handleDelete = (id) => {
    const listItems = items.filter(item => item.id !== id)
    setItems(listItems)
    localStorage.setItem('todo_list', JSON.stringify(listItems))
  }

  const handleSubmit=(e)=>{
    
    e.preventDefault()
    setNewItem('')
    addItem(newItem)
  }

 


  return (
    <div>
      <Header />
      <AddItem 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
      <SearchItem
      search={search}
      setSearch={setSearch}
      />
      <Content
        items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete} />
      <Footer length={items.length} />

     
      
    
    </div>
  );
}

export default App
