import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { JSX } from "react/jsx-runtime";

interface contact {
  
  name: string;
  email: string;
}

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const [formData, setFormData] = useState<contact[]>([{
    name: "",
    email: "",
  }]);

  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target;
    setFormData(prev=>({
        ...prev,[name]:value
    }))
  }

const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
e.preventDefault()
console.log('submited')
}

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="click to focus" />
      <button onClick={handleFocus}>Focus</button>
        <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">Name:</label>
      <input
        type="text"
        placeholder="name"
        value={formData[0].name}
        onChange={handleChange}
        name="name"
      />
      <label htmlFor="">Email:</label>
      <input
        type="text"
        placeholder="email"
        value={formData[0].email}
        onChange={handleChange}
        name="email"
      />

      <button type="submit">submit</button>
<ul>
      {formData.map((data)=>(
        <li>Name:{data.name}</li>
      ))}
      </ul>
      </form>
    </div>
  );
};

export default FocusInput;
