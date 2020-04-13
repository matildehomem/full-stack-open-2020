import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Heading = ({text})=> <h2>{text}</h2>

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState( Array.from(Array(anecdotes.length), () => 0))
  const handleAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))


  const handleVote =()=>{
    const tempVotes = [...votes];
    tempVotes[selected] += 1;
    setVote(tempVotes);
  }

  const getMaxVotes = votes => {
      let maxVotes = 0;
      let maxIndex = 0;
      for (let i = 0; i < votes.length; i++) {
        if (votes[i] > maxVotes) {
          maxVotes = votes[i];
          maxIndex = i;
        }
      }
      // console.log(maxVotes, maxIndex)
      return [maxVotes, maxIndex];
    }

  const [maxVotes, maxIndex] = getMaxVotes(votes);


  return (
    
    <div>
      <Heading text="Anecdote of the day"/>
      <p>  {anecdotes[selected]} {votes[selected]} votes</p>
      <button onClick={handleVote}> Vote</button>
      <button onClick={handleAnecdote}> next anecdote</button>
      <Heading text="Anecdote with most votes"/>
      <p> {anecdotes[maxIndex]} {maxVotes} votes</p>
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