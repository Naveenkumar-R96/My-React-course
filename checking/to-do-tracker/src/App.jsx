import React from 'react'
import { useState } from 'react'

const App = () => {
  const[input,setInput]=useState('')
  const[value,setvalue]=useState([])

  const handleChange=(e)=>{
   setInput(e.target.value)
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    setInput('')
    setvalue([...value,input])

  }
  return (
    <div className='flex h-screen justify-center items-center'>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={input} placeholder='enter' className='bg-teal-200 rounded-md px-4 py-3 uppercase' onChange={handleChange} />
        <button className='bg-green-300 ml-9 py-3 px-4'>Submit</button>

        <ul>
          {value.map((item)=>(
            <li key={Math.random()}>{item}</li>
          ))}
        </ul>
      </form>
    </div>
  )
}

export default App
