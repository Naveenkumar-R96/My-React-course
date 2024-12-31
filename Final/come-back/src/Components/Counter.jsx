import React, { useState } from 'react'

const Counter = () => {

    const [count,setCount]=useState(0);

    const handleIncrease =()=>{
        setCount(prevCount=>prevCount+1)
    }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrease}>+</button>
    </div>
  )
}

export default Counter
