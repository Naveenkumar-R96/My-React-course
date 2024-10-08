import Header from "./Header";
import Footer from "./Footer"
import Body from "./Body";
import "./App.css"
import { useState } from 'react'



function App(){

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
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }
  const handleTrash = (id) => {

    const listItems = items.filter((item) =>
      item.id !== id)
    setItems(listItems)
  }
    

  return(
    <div>
     <Header 
     items={items}
       
     handleCheck={handleCheck}
     handleTrash={handleTrash}
     />
     
  
     <Footer  
       length={items.length}
     />

     <Body/>

    
    </div>
  );
  }



export default App;