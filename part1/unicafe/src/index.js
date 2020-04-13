import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Heading = ({text}) => <h2>{text}</h2>

const Button = ({text, handleClick}) => {
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({bad, good, neutral}) => {
  return(
    <table>
      <tbody>
      <tr>
        <td>good</td>
        <td>{good}</td>
      </tr>
      <tr>
        <td>neutral</td>
        <td>{neutral}</td>
      </tr>
      <tr>
        <td>bad</td>
        <td>{bad}</td>
      </tr>
   </tbody>
    </table>
  )
}
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Heading text='Give Feedback'/>
      <Button text='bad' handleClick={()=>setBad(bad + 1)} />
      <Button text='neutral' handleClick={()=>setNeutral(neutral +1)} />
      <Button text='good' handleClick={()=>setGood(good + 1)} />
      <Heading text='statistics'/>
      <Statistics good={good} bad={bad} neutral={neutral} />
     
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)