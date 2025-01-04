type info={
    username:string,
    email:string,
    age:number,
    
}


const AdminInflo = ({username,email,age}:info) => {
  return (
    <div>
        <h1>{username}</h1>
        <h2>{email}</h2>
        <h3>{age}</h3>
    </div>
  )
}

export default AdminInflo
