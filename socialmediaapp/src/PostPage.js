import React from 'react'
import { Link } from 'react-router-dom'
const PostPage = () => {
  return (
   <main>
    <h1>PostPage</h1>
      <Link to="postpage/1">Postpage 1</Link>
      <br />
      <Link to="postpage/2">Postpage 2</Link>
      <br />
      <Link to="postpage/3">Postpage 3</Link>
      <br />
   </main>
  )
}

export default PostPage
