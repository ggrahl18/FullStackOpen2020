import React from 'react'
import Blog from './Blog'

const BlogAll = ({ blogs, addVote, removeBlog }) => {
  return (
    <div className="blogs">
      {blogs.sort((a, b) => b.votes - a.votes).map((b) =>
        <Blog
          key={b.id}
          title={b.title}
          author={b.author}
          url={b.url}
          votes={b.votes}
          id={b.id}
          addVote={() => addVote(b.id)}
          removeBlog={() => removeBlog(b.id)}
        />
      )}
    </div>
  )
}

export default BlogAll