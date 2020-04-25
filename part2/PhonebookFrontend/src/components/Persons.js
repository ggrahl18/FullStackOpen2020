import React from 'react'

const Persons = ({ persons, deletePersons }) => {
  
  return (
    persons.map(person =>
      <p key={person.id}>
        {person.name} {person.number} 
        <button onClick={() => deletePersons(person.id)}>delete</button> 
      </p>
    )
  )
}

export default Persons