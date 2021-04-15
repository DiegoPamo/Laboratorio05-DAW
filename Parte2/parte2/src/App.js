import React, { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',number: 973696215 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  const eventRename = (event) => {
    setNewName(event.target.value)
  }
  const eventNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const filterSearch = (event) => {
    setFilter(event.target.value)
  }


  const eventClick = (event) => {
    event.preventDefault()
    
    for (var i = 0; i < persons.length; i++) {
      if(newName === persons[i].name || newNumber === persons[i].number){
        window.alert(newName+' ya existe en su lista');
        setPersons([...persons]) 
      }else {
        const person = {name: newName, number:newNumber}
        setPersons([...persons, person] )
        setNewName("")
        setNewNumber("")
      }    
  }
}


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterSearch={filterSearch}/>
      <h3>Add a new</h3>
      <PersonForm eventRename={eventRename} eventNewNumber={eventNewNumber} 
                  eventClick={eventClick} newName={newName} newNumber={newNumber}/>
      <h2>Numbers</h2>
          {persons.filter((nombre) => 
            nombre.name.includes(filter)).map((person,index) => 
             <Persons key={index} person={person}/>)}
    </div>
  )
}
export default App;
