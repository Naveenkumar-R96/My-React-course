import React from 'react'
import { useParams } from 'react-router'

const Post = () => {
    const {id}= useParams()
  return (
    <div>
        Post{id}
        <br />
        <h1>hi</h1>
      
    </div>
  )
}

export default Post
