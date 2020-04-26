import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import axios from 'axios'

// const promise = axios.get('http://localhost:3001/blogs')

// promise.then(response => {
//   console.log(response)
// })

// axios.get('http://localhost:3001/blogs').then(reponse => {
//     const blogs = response.data
//     console.log(blogs)
//   })

  // axios
  // .get('http://localhost:3001/blogs')
  // .then(response => {
  //   const blogs = response.data
  //   console.log(blogs)
  // })

const blogs = [
  {
    id: 1,
    author: 'Andrew Skurka',
    title: 'Andrew Skurka: Hard-won insights from out there',
    url: 'https://andrewskurka.com/',
    votes: 7 
  },
  {
    id: 2,
    author: 'Alan Dixon',
    title: 'ULTRALIGHT BACKPACKING & HIKING',
    url: 'https://www.adventurealan.com/',
    votes: 5 
  },
  {
    id: 3,
    author: 'Derek Hansen',
    title: 'The Ultimate Hang',
    url: 'https://theultimatehang.com/blog/',
    votes: 3 
  }
]

ReactDOM.render(
    <App blogs={blogs}/>,
  document.getElementById('root')
);

