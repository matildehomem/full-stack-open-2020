import React, { useState, useEffect } from 'react';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';

import phonebookService from './services/phonebook';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [nameToFilter, setNameToFilter] = useState('');
  const [notification, setNotification] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
      const personToUpdate = duplicateName[0];
      const answer = window.confirm(
        `${personToUpdate.name} is already added to phonebook, replace the old number with the new one?`,
      );

      if (answer) {
        personToUpdate.number = newNumber;

        phonebookService
          .updatePerson(personToUpdate)
          .then((res) => {
            setPersons(
              persons.map((person) => {
                return person.id === res.id ? res : person;
              })
            );
            setNotification(`Updated ${personToUpdate.name} number`);
          })
          .catch((err) => {
            setPersons(
              persons.filter((person) => {
                return person.id !== personToUpdate.id;
              }),
            );
            setErrorMessage(
              `Information of ${personToUpdate.name} has already been removed from the server`,
            );
          });
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };

      phonebookService
        .create(newPerson)
        .then((res) => {
          setPersons(persons.concat(res));
          setNotification(`Added ${newPerson.name}`);
        })
        .catch((err) => {          
          setErrorMessage(err.response.data.error);
        });
    }

    setNewName('');
    setNewNumber('');
    setTimeout(() => {
      setErrorMessage('');
      setNotification('');
    }, 5000);
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
    const personToDelete = persons.find((person) => person.id === id);

    const answer = window.confirm(`Delete ${personToDelete.name}?`);
    if (answer)
      phonebookService.deletePerson(id).then((res) => setPersons(newPersons));
  };

  return (
    <div className="wrapper">
      <div>

      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        onChangeName={handleNameChange}
        onChangeNumber={handleNumberChange}
        onClick={handleSubmit}
        />
        </div>
        <div>

      <h2>Phonebook</h2>

      {errorMessage ? (
        <Notification notification={errorMessage} classError={true} />
        ) : null}
      {notification ? <Notification notification={notification} /> : null}

      <Filter value={nameToFilter} onChange={handleFilter} />
      <ul>
      <Persons personsFiltered={personsFiltered} deletePerson={handleDelete} />
      </ul>
        </div>
    </div>
  );
};

export default App;
