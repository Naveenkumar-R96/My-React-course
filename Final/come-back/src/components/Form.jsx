import React, { useState } from "react";

const Form = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const [errusername, seterrusername] = useState("");
  const [erremail, errsetemail] = useState("");
  const [errpassword, errsetpassword] = useState("");
  const [errcpassword, errsetcpassword] = useState("");

  const [cerrusername, cseterrusername] = useState("");
  const [cerremail, cerrsetemail] = useState("");
  const [cerrpassword, cerrsetpassword] = useState("");
  const [cerrcpassword, cerrsetcpassword] = useState("");
  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Name"
          style={{ borderColor: cerrusername }}
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <p>{errusername}</p>
        <input
          type="text"
          placeholder="Email"
          style={{ borderColor: cerremail }}
          value={email}
          onChange={()=>setEmail(e.target.value)}
        />
        <p>{erremail}</p>
        <input
          type="text"
          placeholder="Password"
          style={{ borderColor: cerrpassword }}
          value={password}
          onChange={()=>setPassword(e.target.value)}
        />
        <p>{password}</p>
        <input
          type="text"
          placeholder=" confirm Password"
          style={{ borderColor: cerrsetpassword }}
          value={password}
          onChange={()=>setPassword(e.target.value)}
        />
        <p>{cpassword}</p>
      </form>
    </div>
  );
};

export default Form;
