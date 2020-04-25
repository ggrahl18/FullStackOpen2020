import React from 'react'


const Blog = ({ blogs, handleClick }) => {
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
            <button type="submit" onClick={handleClick}>vote</button>
            {/* <form onSubmit={addVote}>
              <button type="button">Vote Up!</button>
            </form> */}
          </ul>
        </ul>
      )}
    </div>
  )
}

export default Blog