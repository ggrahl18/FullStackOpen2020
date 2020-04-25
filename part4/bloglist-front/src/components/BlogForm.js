import React from 'react'

// const BlogForm = ({ addBlog, newTitle, handleTitleChange, handleAuthorChange, handleUrlChange }) => {
const BlogForm = ({ addBlog, newBlog, handleBlogChange }) => {
  return (
    <div>
      <form onSubmit={addBlog}>
        <p>
          title:<input value={newBlog} onChange={handleBlogChange} />
          {/* title:<input type="newTitle" onChange={handleTitleChange} /> */}
        </p>
        {/* <p>
          author:<input type="newAuthor" onChange={handleAuthorChange} />
        </p>
        <p>
          address:<input type="newUrl" onChange={handleUrlChange} />
        </p> */}
        <p>
          <button type="submit">add</button>
        </p>
      </form>
    </div>
  )
}

export default BlogForm