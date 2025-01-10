import React, { useState } from 'react'

const Form = ({addItem}) => {

    const [work,setWork]=useState("")
    const [start,setStart]=useState("")
    const [end,setEnd]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!work.trim()|| !start.trim()|| !end.trim()){
            return;
        }
       
            addItem({id:Date.now(),work,start,end})
            setEnd("")
            setStart("")
            setWork("")
        
    }

  return (
   <form action="" className=' mt-5 flex flex-wrap gap-2 'onSubmit={handleSubmit}>
    <input type="text" placeholder='Work' className='rounded text-black px-3 py-2' value={work} onChange={(e)=>setWork(e.target.value)} />
    <input type="text" placeholder='Start' className='rounded text-black px-3 py-2'value={start} onChange={(e)=>setStart(e.target.value)} />
    <input type="text" placeholder='End' className='rounded text-black px-3 py-2'  value={end}onChange={(e)=>setEnd(e.target.value)} />
    <button className='bg-yellow-200 px-3 py-2 text-black ' type='submit'>submit</button>
    
   </form>
   
  )
}

export default Form
