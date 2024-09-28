

import React from 'react'

const Header = () => {

    const handleClick1=(e)=>{
        console.log(e.target.className)
    }
    const handleClick2=(name)=>{
        console.log(`yes ${name}`)
    }
  return (
    <header>
        <h1 className='hi' onDoubleClick={(e)=>handleClick1(e)}>To do List</h1>
        <div> <button onClick={()=>handleClick2('NAVEEN')}>check</button></div>
        
    </header>
  )
}

export default Header