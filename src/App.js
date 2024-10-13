import Header from "./Header";
import Footer from "./Footer"
import Body from "./Body";
import "./App.css"
import { useState, useEffect } from 'react'
import Additem from "./Additem";
import Search from "./Search"




function App() {

  const API_URL = "http://localhost:3500/items"

  const [items, setItems] = useState([])

  const [newItem, setNewItem] = useState('')

  const [search, setSearch] = useState('')

  const [fetchError, setFetchError] = useState(null)

  const[isLoading,setIsLoading]=useState(true)

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("data not recieved")
        console.log(response)
        const listItems = await response.json();
        console.log(listItems)
        setItems(listItems)
        setFetchError(null)
      } catch (err) {
        setFetchError(err.message)
      }finally{
        setIsLoading(false)
      }
    }
    setTimeout(()=>{
      (async () => await fetchItem())()
    },2000)
   

  }, [])

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItem = [...items, addNewItem]
    setItems(listItem)

  }

  const handleCheck = (id) => {
    const listItems = items.map((content1) =>
      content1.id === id ? { ...content1, checked: !content1.checked } : content1)
    setItems(listItems);

  }
  const handleTrash = (id) => {

    const listItems = items.filter((item) =>
      item.id !== id)
    setItems(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newItem)
    addItem(newItem)
    setNewItem('')
  }


  return (
    <div>
      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p>{`Error: ${fetchError}`}</p>}
        {!isLoading && !fetchError && <Header
            items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}

            handleCheck={handleCheck}
            handleTrash={handleTrash}
          />
        } 
      </main>
      <Additem
        newItem={newItem}
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

      <Body />


    </div>
  );
}



export default App;