type info={
    username:string,
    email:string,
    age:number,
    location:string[]   

}

const UserInflo = ({username,email,age,location}:info) => {
  return (
    <div>
        <h1>{username}</h1>
        <h2>{email}</h2>
        <h3>{age}</h3>
        <h4>{location}</h4>
    </div>
  )
}

export default UserInflo
