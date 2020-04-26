import React from 'react';

const Persons = ({ personsFiltered, deletePerson }) =>
  personsFiltered.map((person, i) => (
    <li key={i}>
      <p>{person.name} <br /><small>{person.number}</small></p>
      <button onClick={()=>deletePerson(person.id)}>X</button>
    </li>
  ));

export default Persons;
