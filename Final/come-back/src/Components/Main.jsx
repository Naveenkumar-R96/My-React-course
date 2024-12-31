import React from "react";

const Main = () => {
  const multiply = (a, b) => {
    return a * b;
  };

  const main=()=>{
    return <section>
      
    </section>
  }
  const numbers = [1, 2, 3, 4, 5];

  const userInfor = [
    {
      username: "naveen",
      email: "nk946432@gmail.com",
      location: "usa",
    },
    { username: "naveen", email: "nk946432@gmail.com", location: "usa" },
    { username: "naveen", email: "nk946432@gmail.com", location: "usa" },
  ];

  return (
    <main>
      <h2>Main Content</h2>
      <p>this is my main content</p>
      <p>multiplication of two number is {multiply(3, 3)}</p>
      <p>
        {numbers.map((number) => (
          <ul key={number}>
            <li>{number}</li>
          </ul>
        ))}
      </p>
      <h1>
        {
          userInfor.map((info)=>(
            <ul>
              <li>{info.location}</li>
            </ul>
          ))
        }
      </h1>
    </main>
  );
};

export default Main;
