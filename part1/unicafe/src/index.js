import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const all = ( props.good + props.neutral + props.bad )
  const average = (( props.good - props.bad ) / all)
  const positive = [( props.good/all ) * 100, "%" ].join(" ")

  if (all === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <h3>No feedback given</h3>
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="Good" value={props.good} />
          <StatisticLine text="Neutral" value={props.neutral} />
          <StatisticLine text="Bad" value={props.bad} />
          <StatisticLine text="All" value={all} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={positive} />
        </tbody>
      </table>
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const App = (props) => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <div>
        <h1>Submit Feedback Here</h1>
        <Button onClick={handleGood} text="Good" />
        <Button onClick={handleNeutral} text="Neutral" />
        <Button onClick={handleBad} text="Bad" />
      </div>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)