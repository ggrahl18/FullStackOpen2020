import React from 'react'


const Blog = (props) => {
  // const Blog = ({ addVote, handleClick, blogs }) => {
  return (
    <div>
      {props.blogs.map((blog, i) =>
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
          <button value={props.addVote} onClick={props.handleClick}>vote</button>
          </ul>
        </ul>
      )}
    </div>
  )
}

export default Blog