
import { useState } from 'react'
import React from 'react'

const Header = () => {


  const [number,setNumber]=useState('One')


  function handleNameChange(){
    const names=["one","two","three"];
    const int =Math.floor(Math.random()*3);
    setNumber( names[int]);
  }

   return(
    <header>
    <p>Lets {number} should be allowed</p>
    <button onClick={handleNameChange}>Subscribe</button>
    </header>
   )
  
  }
  


export default Header