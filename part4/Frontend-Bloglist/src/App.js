import React, { useState, useEffect } from 'react'
import BlogAll from './components/BlogAll'
import blogService from './services/blogs'
import loginService from './services/login'
import Notifications from './components/Notifications'
import LoginForm from './components/LoginForm'
import Togglable from './components/Togglable'
import BlogForm from './components/BlogForm'

const App = (props) => {
  const [blogs, setBlogs] = useState(props.blogs)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    blogService
      .getAll()
      .then(initialBlogs => {
        setBlogs(initialBlogs)
      })
      .catch(error => {
        alert('There has been an error fetching your blogs.')
      })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const addBlog = (blogObject) => {
    blogFormRef.current.toggleVisibility()
    blogService
      .create(blogObject)
      .then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))

        messageWith('Blog added!')
        console.log('Blog added!')
        setTimeout(() => {
          messageWith(null)
        }, 5000)
      })
      .catch(error => {
        messageWith('Error, your blog was not added! Check all fields.', 'error')
        console.log('Error, your blog was not added! Check all fields.')
        setTimeout(() => {
          messageWith(null)
        }, 5000)
      })
  }

  const removeBlog = (id) => {
    const deleteBlog = blogs.find(b => b.id === id)
    if (window.confirm(`Delete ${deleteBlog.title}`)) {
      blogService.remove(id)
        .then(response => {
          setBlogs(blogs.filter(p => p.id !== id))
          messageWith(`Deleted ${deleteBlog.title}`)
          console.log('Blog removed!')
          setTimeout(() => {
            messageWith(null)
          }, 5000)
        })
        .catch(() => {
          messageWith(`${deleteBlog.title} was NOT removed!`, 'error')
          console.log(`${deleteBlog.title} was NOT removed!`)
          setTimeout(() => {
            messageWith(null)
          }, 5000)
        })
    }
  }

  const addVote = (id) => {
    const blog = blogs.find((n) => n.id === id)
    const changedBlog = { ...blog, votes: blog.votes + 1 }

    blogService
      .update(id, changedBlog)
      .then(returnedBlog => {
        setBlogs(blogs.map(blog => blog.id !== id ? blog : returnedBlog))
      })
      .catch(error => {
        alert('Voting error!')
        console.log('Voting error!')
      })
  }

  const messageWith = (message, type='success') => {
    setMessage({ message, type })
    setTimeout(() => {
      setMessage(null)
    }, 6000)
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      )

      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')

      messageWith('login successful!')
      console.log('Login successful!')
      setTimeout(() => {
        messageWith(null)
      }, 5000)
    }
    catch (exception) {
      messageWith('Incorrect login!', 'error')
      console.log('Incorrect login!')
      setTimeout(() => {
        messageWith(null)
      }, 5000)
    }
  }

  const loginForm = () => (
    <Togglable buttonLabel='login'>
      <LoginForm
        username={username}
        password={password}
        handleUsernameChange={({ target }) => setUsername(target.value)}
        handlePasswordChange={({ target }) => setPassword(target.value)}
        handleSubmit={handleLogin}
      />
    </Togglable>
  )

  const blogFormRef = React.createRef()

  const blogForm = () => (
    <Togglable buttonLabel='new blog' ref={blogFormRef}>
      <BlogForm createBlog={addBlog} />
    </Togglable>
  )

  const handleLogout = (event) => {
    event.preventDefault()
    try {
      window.localStorage.clear()
      messageWith('You have been logged out!')
      console.log('You have been logged out!')
      window.location.reload(false)
    }
    catch (exception) {
      messageWith('Logout failed!', 'error')
      console.log('Logout failed!')
      setTimeout(() => {
        messageWith(null)
      }, 5000)
    }
  }

  return (
    <div className="mainBody">
      <h1>Blog Logger</h1>
      <p>Enter new found blogs that peak your interest and let others vote on them!</p>

      {user === null ?
        loginForm() :
        <div>
          <p className='userName'>{user.name} logged in</p>
          <Notifications message={message} />
          <button onClick={handleLogout}>log out</button>
          {blogForm()}
        </div>
      }

      <BlogAll
        blogs={blogs}
        id={props.id}
        votes={props.votes}
        addVote={addVote}
        removeBlog={removeBlog}
      />
    </div>
  )
}

export default App