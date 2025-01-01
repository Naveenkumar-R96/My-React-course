import React, { useState } from 'react'
import Popup from './Popup'

const Copyinput = () => {

    const [inputValue,setInputValue]=useState('')
    const [copied,setCopied]=useState(false)


    const handleCopy =()=>{
        navigator.clipboard.writeText(inputValue).then(()=>{
            setCopied(true)
            setTimeout(()=>setCopied(false),2000)
        })
        setInputValue('')
    }

  return (
    <div>
      <input type="text" value={inputValue} onChange={e=>setInputValue(e.target.value)} />
      <button onClick={handleCopy}>copy</button>

      <Popup copied={copied}/>
    </div>
  )
}

export default Copyinput
