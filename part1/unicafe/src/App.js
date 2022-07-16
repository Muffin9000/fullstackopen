import { useState } from 'react'


const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const StatLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>
const Stat = ({good, neutral, bad}) => {
  const sum = good + bad + neutral
  const calcAverage = () => {
    let average = (good - bad) / sum
    if (isNaN(average)){
      average = 0
    }
    return average
  }

  const calcPositive = () => {
    return good / sum
  }

  return (sum === 0) ? <p>No feedback given</p> : (
    <>
    <h1>statistics</h1>
    <table>
    <tbody>
    <StatLine text="good" value={good} />
    <StatLine text="neutral" value={neutral} />
    <StatLine text="bad" value={bad} />
    <StatLine text="all" value={sum} />
    <StatLine text="average" value={calcAverage()} />
    <StatLine text="positive" value={calcPositive() + " %"} />
    </tbody>
    </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Stat good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App