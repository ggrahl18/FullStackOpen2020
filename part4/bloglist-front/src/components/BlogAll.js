import React from 'react'
import Blog from './Blog'

const BlogAll = ({ blogs, addVote }) => {
  return (
    <div>
      {blogs.map((b) => 
        <Blog
          key={b.id}
          title={b.title}
          author={b.author}
          url={b.url}
          votes={b.votes}
          id={b.id}
          addVote={() => addVote(b.id)}
        />
      )}
    </div>
  )
}

export default BlogAll