import React from 'react'

const BlogForm = ({ onSubmit, handleChangeBlog, handleChangeAuthor, handleChangeUrl, valueBlog, valueAuthor, valueUrl }) => {
  return (
    <div>
      <h2>Create a new blogpost</h2>

      <form onSubmit={onSubmit}>
        <p>
          title:<input value={valueBlog} onChange={handleChangeBlog} />
        </p>
        <p>
          author:<input value={valueAuthor} onChange={handleChangeAuthor} />
        </p>
        <p>
          address:<input value={valueUrl} onChange={handleChangeUrl} />
        </p>
        <p>
          <button type="submit">add</button>
        </p>
      </form>
    </div>
  )
}

export default BlogForm