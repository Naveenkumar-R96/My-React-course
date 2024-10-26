import React from 'react'
import { Link, useParams } from 'react-router-dom'
const PostPage = ({posts, handleDelete}) => {
  const {id} =useParams();
  const commingPost =posts.find(post => (post.id).toString()===id);
  return (
   <main>
    {
      commingPost && 
      <>
      <h2>{commingPost.title}</h2>
      <p>{commingPost.datetime}</p>
      <p>{commingPost.body}</p>
      <button onClick={()=>handleDelete(commingPost.id)}>Delete Post</button>
      </>
    }
   </main>
  )
}

export default PostPage
