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

const Statistic = ({text, value})=>{
// console.log(text, value);

  return(
    <tr>
    <td>{text}</td>
    <td>{value}</td>
    </tr>
  )
}

const Statistics = ({statistics}) => {

  if(statistics.length > 0){
  console.log(statistics);
    return(
      <table>
        <tbody>
          
          {statistics.map((st, index) =>{
            return (
               <Statistic key={index} text={st.text} value={st.value} />
            )})
          }
      
        </tbody>
      </table>
    )
  } else{
    return(
      <p>No feedback given</p>
    )
  }
}
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const statistics = []

  const all = good + neutral + bad;

  if (all !== 0) {
    statistics.push({ text: "good", value: good });
    statistics.push({ text: "neutral", value: neutral });
    statistics.push({ text: "bad", value: bad });
    statistics.push({ text: "all", value: all });


    let average = (good - bad) / all;
    let positive = (good * 100) / all + " %";
    statistics.push({ text: "average", value: average });
    statistics.push({ text: "positive", value: positive });
  }

  return (
    <div>
      <Heading text='Give Feedback'/>
      <Button text='good' handleClick={()=>setGood(good + 1)} />
      <Button text='neutral' handleClick={()=>setNeutral(neutral +1)} />
      <Button text='bad' handleClick={()=>setBad(bad + 1)} />
      <Heading text='statistics'/>
      <Statistics statistics={statistics} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)