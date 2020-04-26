import React , { useState } from 'react';
import Blog from './components/Blog'
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
  } 

  // const addVote = (id) => {
  //   console.log(votes, ' votes')
  //   setVotes(votes + 1)
  //   // const blog = blogs.find((n) => n.id === id)
  //   // const changedBlog = { ...blog, votes: blog.votes + 1}
  //   // console.log('changedBlog is ', blog)
  //   // setBlogs(blogs.concat(changedBlog))
  //   // console.log('changedBlog is ', changedBlog)
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
        ​<Blog
          blogs={blogs}
          addVote={addVote}
          votes={votes}
        />
    </div>
  )
}

export default App;