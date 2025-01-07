import React, { useState } from 'react'
import Navbar from './Pages/Navbar/Navbar'
import './App.css'
import Card from './Components/Card'
import products from './db/data' 
import Product from './Pages/Products/Product' 
import Button from './Components/Button'
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
    
    return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice,id }) => {
  
      return (
        
          <Card
          key={id}
            img={img}
            title={title}
            star={star}
            reviews={reviews}
            newPrice={newPrice}
            prevPrice={prevPrice}
          />
       
      );
    });
  }
  



  





  return (
    <div>
      <Navbar selectedoption={selectedoption} setSelectedOption={setSelectedOption} query={query} setquery={setquery}/>
      <Product filterdData={filterdData(products,selectedoption)}/>
    </div>
  )
}

export default App
