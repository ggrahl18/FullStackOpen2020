import React, { useState } from 'react'

const BlogForm = ({ createBlog }) => {
  const [newBlog, setNewBlog] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')


  const handleChangeBlog = (event) => {
    setNewBlog(event.target.value)
  }

  const handleChangeAuthor = (event) => {
    setNewAuthor(event.target.value)
  }

  const handleChangeUrl = (event) => {
    setNewUrl(event.target.value)
  }

  const addBlog = (event) => {
    event.preventDefault()
    createBlog({
      title: newBlog,
      author: newAuthor,
      url: newUrl,
      votes: 0,
    })

    setNewBlog('')
    setNewAuthor('')
    setNewUrl('')
  }

  return (
    <div>
      <h2>Create a new blogpost</h2>

      <form className="container" onSubmit={addBlog} >
        <p>
          title: <input id='title' value={newBlog} onChange={handleChangeBlog} />
        </p>
        <p>
          author: <input id='author' value={newAuthor} onChange={handleChangeAuthor} />
        </p>
        <p>
          address: <input id='url' value={newUrl} onChange={handleChangeUrl} />
        </p>
        <p>
          <button id='add-button' type="submit">add</button>
        </p>
      </form>
    </div>
  )
}

export default BlogForm