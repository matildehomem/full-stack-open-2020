import React, { useState, useEffect } from 'react';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

import phonebookService from './services/phonebook';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [nameToFilter, setNameToFilter] = useState('');

  useEffect(() => {
    phonebookService.getAll().then((res) => setPersons(res));
  }, []);

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

    phonebookService.create(newPerson).then((res) => {
      setPersons(persons.concat(res));
      setNewName('');
      setNewNumber('');
    });
  };

  const handleFilter = (e) => {
    setNameToFilter(e.target.value);
  };

  const personsFiltered = nameToFilter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(nameToFilter.toLowerCase()),
      )
    : persons;

  const handleDelete = (id) => {
    const newPersons = persons.filter((person) => id !== person.id);
    const personToDelete = persons.find(person => person.id === id)
    
    const answer = window.confirm(`Delete ${personToDelete.name}?`)
    if(answer) phonebookService.deletePerson(id).then((res) => setPersons(newPersons));
  };

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
      <Persons personsFiltered={personsFiltered} deletePerson={handleDelete} />
    </div>
  );
};

export default App;
