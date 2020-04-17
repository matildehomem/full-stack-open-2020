import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [nameToFilter, setNameToFilter] = useState('');


  useEffect(()=>{
    axios
    .get('http://localhost:3001/persons')
    .then(res => setPersons(res.data))

  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const duplicateName = persons.filter((person) => person.name === newName);
    if (duplicateName.length) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newPerson = {
      name: newName,
      number: newNumber,
    };

    setPersons(persons.concat(newPerson));
    setNewName('');
    setNewNumber('');
  };
  const handleFilter = (e) => {
    setNameToFilter(e.target.value);
  };

  const personsFiltered = nameToFilter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(nameToFilter.toLowerCase()),
      )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={nameToFilter} onChange={handleFilter} />
      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        onChangeName={handleNameChange}
        onChangeNumber={handleNumberChange}
        onClick={handleSubmit}
      />

      <h2>Numbers</h2>
      <Persons personsFiltered={personsFiltered} />
    </div>
  );
};

export default App;
