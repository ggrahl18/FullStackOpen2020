import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  console.log('props is ', props)

  const mostVotes = votes.findIndex(outerVotes => 
    votes.every(innerVotes => outerVotes >= innerVotes)
    // console.log(votes.every(innerVotes => outerVotes >= innerVotes))
  )
// console.log('mostVotes is', mostVotes)
// console.log(anecdotes[mostVotes])
// console.log('votes is', votes)

const clickHandler = (event) => {
  const id = event.target.id
  if(id === 'next-anecdote'){
    setSelected(Math.floor((Math.random() * anecdotes.length)))
  } else if(id === 'vote') {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
}

  return (
    <div>
      <h1>Anecdote of the day is</h1>
      {props.anecdotes[selected]}
      <p><i>has {votes[selected]} votes</i></p>
      <button id="vote" onClick={clickHandler}>vote</button>
      <button id="next-anecdote" onClick={clickHandler}>next anecdote</button>
      <h2>Anecdote with the most votes</h2>
      {props.anecdotes[mostVotes]}
      <p><i>has {votes[mostVotes]} votes</i></p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
