import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Postlayout = () => {
  return (
    <>
      <h1>PostPage</h1>
      <Link to="/postpage/1">Postpage 1</Link>
      <br />
      <Link to="/postpage/2">Postpage 2</Link>
      <br />
      <Link to="/postpage/3">Postpage 3</Link>
      <br />
      <Link to="/postpage/newpost"> New Post</Link>
      <br />
      <Outlet/>
    </>
  )
}

export default Postlayout
