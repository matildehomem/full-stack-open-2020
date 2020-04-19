import React from 'react';

const Persons = ({ personsFiltered, deletePerson }) =>
  personsFiltered.map((person, i) => (
    <li key={i}>
      {person.name} {person.number}
      <button onClick={()=>deletePerson(person.id)}>delete</button>
    </li>
  ));

export default Persons;
