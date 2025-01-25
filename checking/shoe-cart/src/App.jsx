import React, { useState } from 'react'
import Navbar from './Pages/Navbar/Navbar'
import './App.css'
import Card from './Components/Card'
import products from './db/data' 
import Product from './Pages/Products/Product' 
import Button from './Components/Button'
import AllRoutes from './Components/AllRoutes.jsx'
const App = () => {

  const [selectedoption,setSelectedOption]=useState(null)


  //seatch field
  const [query,setquery]=useState('')
  const filteredItems=products.filter((item)=>(
    item.title.toLowerCase().indexOf(query.toLowerCase())!==-1
  ))

  function filterdData(commingProducts,selected) {
    let filteredProducts = commingProducts;
    
      // Log the filtered products

      if(query){
        filteredProducts=filteredItems;
      }
    
    if(selectedoption){
      filteredProducts=filteredProducts.filter((item)=>(
        item.category===selected ||
        item.color==selected ||
        item.newPrice==selected ||
        item.title === selected

      ))
    }
    
    return filteredProducts.map((item) => {
  
      return (
        
          <Card
          key={item.id}
            img={item.img}
            title={item.title}
            star={item.star}
            reviews={item.reviews}
            newPrice={item.newPrice}
            prevPrice={item.prevPrice}
            id={item.id}
            item={item}
          />
       
      );
    });
  }
  



  

  const finalItem=filterdData(products,selectedoption,query)



  return (
    <div>
      <Navbar selectedoption={selectedoption} setSelectedOption={setSelectedOption} query={query} setquery={setquery}/>
    
     
      <AllRoutes filterdData={finalItem}/>
      
    </div>
  )
}

export default App
