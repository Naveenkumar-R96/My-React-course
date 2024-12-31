import React, { useEffect, useState } from "react";

const UseState = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });

  const handleChange =(event)=>{
    setName(event.target.value)
  }

  useEffect(()=>{
    localStorage.setItem('name',JSON.stringify(name))
  },[name])

  const handleClear =()=>{
    setName('')
  }

  return (
    <div>
      <h1>your name: {name}</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="enter your Name"
      />
      <button onClick={handleClear}>Clear Name</button>
    </div>
  );
};

export default UseState;
