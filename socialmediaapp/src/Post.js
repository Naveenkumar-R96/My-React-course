import React from 'react'
import { useParams } from 'react-router'

const Post = ({post}) => {
    
  return (
   <article>
    <h2>{post.title}</h2>
    <p>{post.datetime}</p>
    <p>{(post.body).lenght<=25 ? post.body : `${(post.body).slice(0.25)}...`}</p>
   </article>
  )
}

export default Post
