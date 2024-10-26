import React, { useEffect } from 'react';
import { useParams } from 'react-router';


const EditPost = ({ posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle }) => {
  const { id } = useParams();
  const post = posts.find(post => (post.id).toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditBody, setEditTitle])
  return (
    <main>
      {editTitle &&
        <>
          <h2>Edit Post</h2>
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="">Title</label>
            <input type="text"
              id="postTitle"
              required
              value={editTitle}
              onChange={(e) => {
                setEditTitle(e.target.value)
              }}

            />
            <label htmlFor="">body</label>
            <textarea type="text"
              id="bodyTitle"
              required
              value={editBody}
              onChange={(e) => {
                setEditBody(e.target.value)
              }}

            />
            <button type ="submit" onClick={()=> handleEdit(post.id)}>submit</button>
          </form>
        </>
      }
    </main>
  )
}

export default EditPost
