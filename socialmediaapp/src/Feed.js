import React from 'react'

const Feed = () => {
  return (
    <div>
      {posts.map(post=>(
        <Post key={post.id} post={post}/>
      ))}
    </div>
  )
}

export default Feed
