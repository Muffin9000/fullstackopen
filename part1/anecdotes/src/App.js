import { useState } from 'react'

const DisplayAnecdote = ({text, votes}) => {
  return (
    <>
      <p>{text}</p>
      <p>has {votes} votes</p>
    </>
  )
}

const ChangeAnecdote = ({onClick, anecdotes, votes}) => {
  return <button onClick={onClick}>next anecdote</button>
}

const VoteBtn = ({onClick}) => {
  return (
  <>
  <button onClick={onClick}>vote</button>
  </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  
  
  const [random, setRandom] = useState(Math.floor(Math.random() * anecdotes.length))
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [mostVotes, setMostVotes] = useState(Math.floor(Math.random() * anecdotes.length))

  const voteCount = () => {
      const copy = Array.from(votes)
      copy[random] += 1
      setVotes(copy)
      getMostVotes(copy)
  }

  const getMostVotes = (arrr) => {
    let biggest = 0
    let biggestIndex = 0
    for(let i = 0; i < arrr.length; i++){
      if(biggest < arrr[i]){
        biggest = arrr[i]
        biggestIndex = i
      }
    }
    setMostVotes(biggestIndex)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <DisplayAnecdote text={anecdotes[random]} votes={votes[random]} />
      <ChangeAnecdote onClick={() => setRandom(Math.floor(Math.random() * anecdotes.length))}/>
      <VoteBtn onClick={voteCount} />
      <h1>Anecdote with most votes</h1>
      <DisplayAnecdote text={anecdotes[mostVotes]} votes={votes[mostVotes]}/>
    </div>
  )
}

export default App