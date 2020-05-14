import React, { useState } from 'react'

const Blog = ({ title, author, url, votes, addVote, removeBlog }) => {
  const [moreBlogVisible, setMoreBlogVisible] = useState(false)

  const hideWhenVisibile = { display: moreBlogVisible ? 'none' : '' }
  const showWhenVisible = { display: moreBlogVisible ? '' : 'none' }

  return (
    <div className="Blog">
      <div style={hideWhenVisibile}>
        {title}
        <button onClick={() => setMoreBlogVisible(true)}>show more</button>
        <button className="remove" onClick={removeBlog}>remove</button>
      </div>

      <div style={showWhenVisible}>
        <ul>
          {title}
          <button onClick={() => setMoreBlogVisible(false)}>show less</button>
          <button className="remove" onClick={removeBlog}>remove</button>
        </ul>
        <ul>
          by: {author}
        </ul>
        <ul>
          <a href={url}> {url}</a>
        </ul>
        <ul className="votes">
          {votes} votes <button onClick={addVote}>vote</button>
        </ul>
      </div>
    </div>
  )
}

export default Blog