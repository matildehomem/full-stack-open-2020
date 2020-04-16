import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameToFilter, setNameToFilter ] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSubmit =(e)=>{
    e.preventDefault();

    const duplicateName = persons.filter(person => person.name === newName)
    if(duplicateName.length){
      alert(`${newName} is already added to phonebook`) 
      return
    } 
    const newPerson = {
      name: newName,
      number: newNumber
    }
    
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }
  const handleFilter = (e) =>{
    setNameToFilter(e.target.value)
  }

const personsFiltered = nameToFilter ? persons.filter(person => person.name.toLowerCase().includes(nameToFilter.toLowerCase())) : persons


  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input value={nameToFilter} onChange={handleFilter}/></div>
      <h2>Add a new</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsFiltered.map((person, i) => <li key={i}>{person.name} {person.number}</li>)}
    </div>
  )
}

export default App