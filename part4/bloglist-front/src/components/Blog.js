
import React from 'react'

const Blog = ({ blogs, addVote }) => {

  return (
    <div>
      {blogs.map((b) =>
        <ul key={b.id}>
          <h4>{b.title}</h4>
          <ul>
            by: {b.author}
          </ul>
          <ul>
            {b.url}
          </ul>
          <ul>
            {b.votes} like
          </ul>
          <ul>
          <button onClick={addVote}>vote</button>          </ul>
        </ul>
      )}
    </div>
  )
}

export default Blog