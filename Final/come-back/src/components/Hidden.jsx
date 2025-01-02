import { set } from 'date-fns/fp'
import React, { useState } from 'react'
import {FaSearch} from"react-icons/fa"
const Hidden = () => {

    const [showInput,setShowInput]=useState(false)
    const [bgcolor,setbgcolor]=useState('white')

    const handleChange=(e)=>{
            setbgcolor('#1a1a1a')
            if(e.target.className==='container'){
                setShowInput(false)
                setbgcolor('#fff')
            }
    }



  return (
   <section style={{backgroundColor:bgcolor}} className='container' onClick={handleChange}>
    {showInput ? (
        <input type="text" placeholder='Search' />
    ) : <FaSearch onClick={()=>setShowInput(true)}/>}
   </section>
  )
}

export default Hidden
