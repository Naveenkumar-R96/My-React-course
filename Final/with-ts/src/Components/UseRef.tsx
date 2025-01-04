import React, { FormEvent, useRef, useState } from 'react'

type formData={
    name:string;
    email:string;
    password:string;
}



const UseRef = () => {

    const [submittedData,setSubmittedData]=useState<formData>({
        name:'',
        email:'',
        password:''
    })


    const name=useRef<HTMLInputElement>(null);
    const email=useRef<HTMLInputElement>(null);
    const password=useRef<HTMLInputElement>(null);

    const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
        const newname=name.current!.value;
        const newemail=email.current!.value;
        const newpasssword=password.current!.value;
        event.preventDefault()

        setSubmittedData({
            name:newname,
            email:newemail,
            password:newpasssword
        })
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='name' ref={name} />
        <input type="email" placeholder='email' ref={email} />
        <input type="password" placeholder='name' ref={password} />

        <button type='submit'>submit</button>

        <h1>{submittedData.name}</h1>
        <h1>{submittedData.email}</h1>
        <h1>{submittedData.password}</h1>
      </form>
    </div>
  )
}

export default UseRef
