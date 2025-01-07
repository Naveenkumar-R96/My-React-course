import React, { useState } from 'react'
import Navbar from './Pages/Navbar/Navbar'
import './App.css'
import Card from './Components/Card'
import products from './db/data' 
import Product from './Pages/Products/Product' 
import Button from './Components/Button'
const App = () => {

  const [selectedoption,setSelectedOption]=useState('')


  //seatch field
  const [query,setquery]=useState('')
  const filteredItems=products.filter((item)=>(
    item.title.toLowerCase().indexOf(query.toLowerCase())!==-1
  ))

  function filterdData(commingProducts) {
    const filteredProducts = commingProducts;
    
    console.log(filteredProducts);  // Log the filtered products
    
    return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice }) => {
      console.log(title);  // Log titles for debugging
  
      return (
        <div key={title}>  {/* Ensure a wrapper div or fragment */}
           {/* Reduced font size */}
          <Card
            img={img}
            title={title}
            star={star}
            reviews={reviews}
            newPrice={newPrice}
            prevPrice={prevPrice}
          />
        </div>
      );
    });
  }
  



  





  return (
    <div>
      <Navbar selectedoption={selectedoption} setSelectedOption={setSelectedOption}/>
      <Product filterdData={filterdData(products)}/>
    </div>
  )
}

export default App
