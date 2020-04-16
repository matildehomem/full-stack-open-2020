import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

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
      <Filter value={nameToFilter} onChange={handleFilter} />
      <h2>Add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} onChangeName={handleNameChange} onChangeNumber={handleNumberChange} onClick={handleSubmit} />
    
      <h2>Numbers</h2>
      <Persons personsFiltered={personsFiltered}/>
    </div>
  )
}

export default App