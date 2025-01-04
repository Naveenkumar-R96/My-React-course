import { useState } from "react"


const Counter = () => {

    const [count,setCount]=useState<number>(0)

  return (
    <div>
      <h1>Counter App</h1>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default Counter
