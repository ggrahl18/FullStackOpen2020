import React , { useState } from 'react';
import Blog from './components/Blog'
import BlogForm from './components/BlogForm'
import TopBlogs from './components/TopBlogs'

const App = (props) => {
  const [blogs, setBlogs] = useState(props.blogs)
  const [newBlog, setNewBlog] = useState('')
  const [votes, setVotes] = useState(0)
  // const [votes, setVotes] = useState(props.blogs.votes)
  
  // const [newTitle, setNewTitle] = useState('')
  // const [newAuthor, setNewAuthor] = useState('')
  // const [newUrl, setNewUrl] = useState('')

  const addBlog = (event) => {
    event.preventDefault()
    console.log('Blog added', event.target.value)
      const blogObject = {
      title: newBlog,
    //   author: newAuthor,
    //   url: newUrl,
      votes: 0,
      id: blogs.length + 1
    }

    setBlogs(blogs.concat(blogObject))
    setNewBlog('')
  }

  // const handleTitleChange = (event) => {
  //   console.log(event.target.value)
  //   setNewTitle({ newTitle: event.target.value})
  // }

  // const handleAuthorChange = (event) => {
  //   console.log(event.target.value)
  //   setNewAuthor({ newAuthor: event.target.value})
  // }

  // const handleUrlChange = (event) => {
  //   console.log(event.target.value)
  //   setNewUrl({ newTitle: event.target.value})
  // }

  const handleBlogChange = (event) => {
    console.log(event.target.value)
    setNewBlog(event.target.value)
    // setNewTitle({ newTitle: event.target.value})
    // setNewAuthor({ newAuthor: event.target.value})
    // setNewUrl({ newTitle: event.target.value})
    // setNewBlog(event.target.value)
  }

  const addVote = (event) => {
    event.preventdefault()
    console.log('UpVote clicked!', event.target)
  }

  const handleClick = (event) => {
    console.log(votes, ' votes')
    setVotes(votes + 1)
  } 

  return (
    <div>
      <h1>Blog Logger</h1>
        <h4>
          Enter new found blogs that peak your interest and let others vote on them!
        </h4>
        <BlogForm 
          addBlog={addBlog} 
          value={newBlog} 
          // newAuthor={newAuthor} 
          // newUrl={newUrl}
          handleBlogChange={handleBlogChange}
        />

        <h2>Top Rated Blogs</h2>
        <TopBlogs />

        <h2>All Blogs</h2>
        <Blog
          blogs={props.blogs} 
          value={addVote}
          handleClick={handleClick} 
        />
    </div>
  )
}

export default App;


// import React , { useState } from 'react';
// import Blog from './components/Blog'
// import BlogForm from './components/BlogForm'
// import TopBlogs from './components/TopBlogs'

// const App = () => {
//   const [blogs, setBlogs] = useState('')

//   const [newBlog, setNewBlog] = useState('')
  
//   const [newTitle, setNewTitle] = useState('')
//   const [newAuthor, setNewAuthor] = useState('')
//   const [newUrl, setNewUrl] = useState('')

//   const [votes, setVotes] = useState(0)

//   const addBlog = (event) => {
//     event.preventDefault()
//     console.log('Blog added', event.target.value)
//       const blogObject = {
//       title: newTitle,
//       author: newAuthor,
//       url: newUrl,
//       id: blogs.length + 1
//     }

//     setBlogs(blogs.concat(blogObject))
//     setNewBlog('')
//   }

//   const handleTitleChange = (event) => {
//     console.log(event.target.value)
//     setNewTitle({ newTitle: event.target.value})
//   }

//   const handleAuthorChange = (event) => {
//     console.log(event.target.value)
//     setNewAuthor({ newAuthor: event.target.value})
//   }

//   const handleUrlChange = (event) => {
//     console.log(event.target.value)
//     setNewUrl({ newTitle: event.target.value})
//   }

//   // const handleBlogChange = (event) => {
//   //   console.log(event.target.newTitle)
//   //   setNewTitle({ newTitle: event.target.value})
//   //   setNewAuthor({ newAuthor: event.target.value})
//   //   setNewUrl({ newTitle: event.target.value})
//   //   // setNewBlog(event.target.value)
//   // }

//   const addVote = (event) => {
//     event.preventdefault()
//     console.log('UpVote clicked!', event.target.value)
//   }

//   const handleClick = (event) => {
//     // console.log('voted!', event.target.value)
//     setVotes(votes + 1)
//     console.log(votes, 'are the votes')
//   } 

//   return (
//     <div>
//       <h1>Blog Logger</h1>
//         <h4>
//           Enter new found blogs that peak your interest and let others vote on them!
//         </h4>
//         <BlogForm 
//           addBlog={addBlog} 
//           newTitle={handleTitleChange} 
//           newAuthor={handleAuthorChange} 
//           newUrl={handleUrlChange}
//           // addBlog={addBlog} 
//           // newTitle={newTitle} 
//           // newAuthor={newAuthor} 
//           // newUrl={newUrl}
//           // handleBlogChange={handleBlogChange}
//         />

//         <h2>Top Rated Blogs</h2>
//         <TopBlogs />

//         <h2>All Blogs</h2>
//         <Blog 
//           value={addVote}
//           handleClick={handleClick} 
//           // handleVoteChange={handleVoteChange}
//         />
//     </div>
//   )
// }

// export default App;
