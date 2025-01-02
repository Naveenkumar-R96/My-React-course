import React, { useState } from 'react'

const Accordian = ({title,content}) => {

    const [active,setActive]=useState(false)

  return (
    <div>
      <div onClick={()=>{setActive(!active)}}>
        <div>{title}</div>
        <p>{active ? '-' : '+'}</p>
      </div>
      <p>{active ?'': content}</p>
    </div>
  )
}

export default Accordian
