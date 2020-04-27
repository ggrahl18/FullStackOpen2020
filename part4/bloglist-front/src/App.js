import React , { useState } from 'react';
import BlogAll from './components/BlogAll'
import BlogForm from './components/BlogForm'
import TopBlogs from './components/TopBlogs'

const App = (props) => {
  const [blogs, setBlogs] = useState(props.blogs)
  const [newBlog, setNewBlog] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')
  const [votes, setVotes] = useState(0)

  const addNote = (event) => {
    event.preventDefault()
    console.log('Blog added', event.target.value)
      
    const blogObject = {
      title: newBlog,
      author: newAuthor,
      url: newUrl,
      votes: 0,
      id: blogs.length + 1
    }

    setBlogs(blogs.concat(blogObject))
    setNewBlog('')
    setNewAuthor('')
    setNewUrl('')
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

  const addVote = (id) => {
    console.log(votes, ' votes')
    setVotes(votes + 1)
    const blog = blogs.find((n) => n.id === id)
    const changedBlog = { ...blog, votes: blog.votes + 1}
    console.log('changedBlog is ', changedBlog)
    // setBlogs(blogs.map(blog => blog.id !== changedBlog ? blog : changedBlog))
    // setBlogs(blogs.map(changedBlog => changedBlog.id))
    // setBlogs(blogs.concat(changedBlog))
    // blogs.concat(changedBlog)
    // setBlogs(blogs.concat(changedBlog.id))
    setBlogs(blogs.map(blog => blog.id.concat(changedBlog)))
  } 

  return (
    <div>
      <h1>Blog Logger</h1>
          Enter new found blogs that peak your interest and let others vote on them!
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
        <BlogAll
          blogs={blogs}
          addVote={addVote}
          id={props.id}
          votes={props.votes}
        />
        {/* ​<Blog
          blogs={blogs}
          addVote={addVote}
          votes={votes}
        /> */}
    </div>
  )
}

export default App