import React, { useState } from "react";

const Todolist = () => {
  const [item, setItem] = useState("");


  const handleChange=(e)=>{
      setItem(e.target.value);
      console.log(e.target.value);
  }

  const handleSubmit=()=>{

  }



  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Enter :</label>
        <input
          type="text"
          placeholder="enter the list"
          value={item}
          onChange={handleChange}
        />
        <button type="submit">Add Todo</button>

        <ul>
          {item.map((items) => (
            <li key={Math.random()}>{item}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default Todolist;
