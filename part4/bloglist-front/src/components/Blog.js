
import React from 'react'

const Blog = ({ title, author, url, votes, addVote }) => {
  return (
    <div>
        <h4>{title}</h4>
        <ul>
          by: {author}
        </ul>
        <ul>
          {url}
        </ul>
        <ul>
          {votes} votes
        </ul>
        <ul>
        <button onClick={addVote}>vote</button>          
        </ul>
    </div>
  )
}

export default Blog