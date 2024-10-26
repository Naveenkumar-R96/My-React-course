import React from 'react'

const NewPost = ({ handleSubmit, postTitle, setPostTitle, postBody, setPostBody }) => {
  return (
    <main>
      <h2>NewPost</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input type="text" id="postTitle"
          required value={postTitle} onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="PostBody">Post:</label>
        <textarea name="" id="PostBody"
        required value={postBody} onChange={(e)=> setPostBody(e.target.value)}
        >

        </textarea>
        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}

export default NewPost
