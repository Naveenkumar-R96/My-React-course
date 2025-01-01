import React, { useEffect, useState } from "react";

const Popup = ({ copied }) => {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(10);

  const handleChange =()=>{
    setOne(prev=>prev+1)
  }

  const summa =()=>{
    setTwo(prev=>prev+10)
  }

  useEffect(()=>{
    console.log('re-rendering')
    /* console.log(`call useEffct${one}`)
    document.title= `increment${one}`
  },[] */},[two])

  return (
    <section>
      {copied && <div>copied to clipboard</div>}
      <p>iruku</p>

      <h1>learning about the useeffect</h1>
      <br />
      <p>{one}</p>
      <button onClick={handleChange}>Add</button>
      <p>{two}</p>
      <button onClick={summa}>summa</button>
    </section>
  );
};

export default Popup;
