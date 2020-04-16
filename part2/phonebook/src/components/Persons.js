import React from 'react'

const Persons = ({personsFiltered}) => personsFiltered.map((person, i) => <li key={i}>{person.name} {person.number}</li>)

export default Persons