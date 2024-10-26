import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {

  return (
    <article>
      <Link to={`post/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.datetime}</p>
      </Link>
      <p>{(post.body).lenght <= 25 ? post.body : `${(post.body).slice(0.25)}...`}</p>
    </article>
  )
}

export default Post
