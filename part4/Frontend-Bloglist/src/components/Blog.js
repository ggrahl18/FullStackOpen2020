import React, { useState } from 'react'

const Blog = ({ title, author, url, votes, addVote, removeBlog }) => {
  const [moreBlogVisible, setMoreBlogVisible] = useState(false)

  const hideWhenVisibile = { display: moreBlogVisible ? 'none' : '' }
  const showWhenVisible = { display: moreBlogVisible ? '' : 'none' }

  return (
    <div>
      <div style={hideWhenVisibile} className="BlogShow">
        {title} - {author}
        <button id='showmore-button' onClick={() => setMoreBlogVisible(true)}>show more</button>
        <button id='remove-button' className="remove" onClick={removeBlog}>remove</button>
      </div>

      <div style={showWhenVisible} className="BlogHide">
        <ul>
          {title}
          <button id='showless-button' onClick={() => setMoreBlogVisible(false)}>show less</button>
          <button id='remove-button' className="remove" onClick={removeBlog}>remove</button>
        </ul>
        <ul>
          by: {author}
        </ul>
        <ul>
          <a href={url}> {url}</a>
        </ul>
        <ul className="vote-button">
          {votes} votes <button id='vote-button' onClick={addVote}>vote</button>
        </ul>
      </div>
    </div>
  )
}

export default Blog