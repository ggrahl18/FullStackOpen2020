import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import AddPerson from './components/AddPerson'
import Filter from './components/Filter'
import Notifications from './components/Notifications'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filters, setFilters ] = useState('')
  const [ message, setMessage ] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then((data) => {
        setPersons(data)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }  
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }  

  const handleFiltersChange = (event) => {
    setFilters(event.target.value)
  } 

  const messageWith = (message, type='success') => {
    setMessage({ message, type })
    setTimeout(() => {
      setMessage(null)
    }, 6000)
  }

  const deletePersons = (id) => {
    const deletePerson = persons.find(p => p.id === id)
    const confirmed = window.confirm(`Delete ${deletePerson.name}`)
    if (confirmed) {
      personService.remove(id)
        .then(response => {
          setPersons(persons.filter(p => p.id !== id))
          messageWith(`Deleted ${deletePerson.name}`)
        }).catch(() => {
          setPersons(persons.filter(p => p.id !== id))
          messageWith(`${deletePerson.name} was already removed`, 'error')
        })
    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    
    const personExists = persons.find(p => p.name === newName)
    if (personExists) {
      const confirmed = window.confirm(`${personExists.name} already exists, replace number?`)
      if (confirmed) {
        personService.update(personExists.id, {
          name: personExists.name,
          number: newNumber
        }).then(retunedPerson => {
          setPersons(persons.map(person => person.id !== personExists.id ? person : retunedPerson))
          messageWith(`Updated number for  ${personExists.name}`)
          setNewName('')
          setNewNumber('')
        })
      }
    } else {
      personService.create({
        name: newName,
        number: newNumber   
      }).then(addedPerson => {
        setPersons(persons.concat(addedPerson))
        messageWith(`Added ${newName}`)
        setNewName('')
        setNewNumber('')
      }).catch(error => {
        console.log(error.response.data.error)
        messageWith(`${error.response.data.error} `, 'error')
      })
    }
  }

  const showPerson = persons.filter(person => person.name.toLowerCase().includes(filters.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notifications message={message} />
      
      Filter: 
      <Filter
        value={filters}
        onChange={handleFiltersChange}
      />

      <h3>Add Entry</h3>
      <AddPerson 
        handleNameChange={handleNameChange}
        newName={newName}
        handleNumberChange={handleNumberChange}
        newNumber={newNumber}
        addPerson={addPerson}
      />
     
      <h3>Name & Numbers</h3>
      <Persons 
        persons={showPerson} 
        deletePersons={deletePersons} />
    </div>
  )
}

export default App  