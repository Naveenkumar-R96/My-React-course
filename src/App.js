import Header from "./Header";
import Footer from "./Footer"
import Body from "./Body";
import "./App.css"
import { useState,useEffect } from 'react'
import Additem from "./Additem";
import Search from "./Search"




function App(){

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todo_list')))

  const [newItem, setNewItem]=useState('')

  const [search,setSearch]=useState('')

  const addItem=(item)=>{
    const id=items.length ? items[items.length -1].id+1:1;
    const addNewItem={id,checked:false,item};
    const listItem =[...items,addNewItem]
    setItems(listItem)
    localStorage.setItem("todo_list",JSON.stringify(listItem))
  }

  const handleCheck = (id) => {
    const listItems = items.map((content1) =>
      content1.id === id ? { ...content1, checked: !content1.checked } : content1)
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }
  const handleTrash = (id) => {

    const listItems = items.filter((item) =>
      item.id !== id)
    setItems(listItems)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(newItem)
    addItem(newItem)
    setNewItem('')
  }
    

  return(
    <div>
     <Header 
     items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
       
     handleCheck={handleCheck}
     handleTrash={handleTrash}
     />
     <Additem  
     newItem= {newItem}
     setNewItem={setNewItem}
     handleSubmit={handleSubmit}
     
     
     />
    <Search
     search={search}
     setSearch={setSearch}
    />
     <Footer  
       length={items.length}
     />

     <Body/>

    
    </div>
  );
  }



export default App;