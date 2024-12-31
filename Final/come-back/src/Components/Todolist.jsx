import React from "react";
import { useState } from "react";

const Todolist = () => {
  const [name, setName] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit =(e)=>{
    if(name){
        e.preventDefault()
        setNewTodo([...name,newTodo])
        setName('')
    }
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input
          type="text"
          placeholder="enter your todo"
          value={name}
          onChange={(e)=>handleChange(e)}
        />
        <button type="submit">click</button>
        <ul>
          {name.map((n, i) => (
            <li key={i}>{n}</li>
          ))}   
        </ul>
      </form>
    </div>
  );
};

export default Todolist;
