import React from 'react'


const Blog = ({ addVote, handleClick, blogs }) => {
  return (
    <div>
      {blogs.map((blog, i) =>
        <ul key={i}>
          <h4>{blog.title}</h4>
          <ul>
            by: {blog.author}
          </ul>
          <ul>
            {blog.url}
          </ul>
          <ul>
            {blog.votes.toString()} votes
          </ul>
          <ul>
          <button value={addVote} onClick={handleClick}>vote</button>
          </ul>
        </ul>
      )}
    </div>
  )
}

export default Blog