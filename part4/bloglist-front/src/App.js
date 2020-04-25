import React , { useState } from 'react';
import Blog from './components/Blog'
import BlogForm from './components/BlogForm'
import TopBlogs from './components/TopBlogs'

const App = (props) => {
  const [blogs, setBlogs] = useState([])
  const [newBlog, setNewBlog] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')
  // const [votes, setVotes] = useState(props.blogs.votes)
  // const [votes, setVotes] = useState(0)

  const addNote = (event) => {
    event.preventDefault()
    console.log('Blog added', event.target.value)
      
    const blogObject = {
      title: newBlog,
      author: newAuthor,
      url: newUrl,
      // votes: 0,
      id: blogs.length + 1
    }

    setBlogs(blogs.concat(blogObject))
    setNewBlog('')
  }

  const handleChangeBlog = (event) => {
    console.log(event.target.value)
    setNewBlog(event.target.value)
  }

  const handleChangeAuthor = (event) => {
    console.log(event.target.value)
    setNewAuthor(event.target.value)
  }

  const handleChangeUrl = (event) => {
    console.log(event.target.value)
    setNewUrl(event.target.value)
  }

  // const addVote = (event) => {
  //   event.preventdefault()
  //   console.log('UpVote clicked!', event.target)
  // }

  // const handleClick = (event) => {
  //   console.log(votes, ' votes')
  //   setVotes(votes + 1)
  // } 

  return (
    <div>
      <h1>Blog Logger</h1>
        <h4>
          Enter new found blogs that peak your interest and let others vote on them!
        </h4>
        <BlogForm
          onSubmit={addNote}
          valueBlog={newBlog}
          valueAuthor={newAuthor}
          valueUrl={newUrl}
          handleChangeBlog={handleChangeBlog}
          handleChangeAuthor={handleChangeAuthor}
          handleChangeUrl={handleChangeUrl}
        />

        <h2>Top Rated Blogs</h2>
        <TopBlogs />

        <h2>All Blogs</h2>
        <Blog
          blogs={props.blogs}
          // value={addVote} 
          // handleClick={handleClick} 
        />
    </div>
  )
}

export default App;