import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',number: 973696215 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const eventRename = (event) => {
    setNewName(event.target.value)
  }
  const eventNewNumber = (event) => {
    setNewNumber(event.target.value)
  }


  const eventClick = (event) => {

    event.preventDefault()
    const person = {name: newName, number:newNumber}

    var cont=1 

    for (var i = 0; i < persons.length; i++) {
      if(persons[i].name === person.name){
        cont++
      } 
    }
    var NewName = person.name
    if(cont === 1){
      setPersons([...persons, person])
      window.alert('El nombre '+NewName+' fue agregado correctamente');
      setNewName("")
      setNewNumber("")
    } else {
      window.alert('El nombre ' +NewName+' ya existe en su lista');
      setNewName("")
      setNewNumber("")

    }

  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={eventClick}>
        <div>
          name: <input type="text" value={newName} onChange={eventRename} />
        </div>
        <div>
          number: <input type="number" value={newNumber} onChange={eventNewNumber} />
        </div>
        <div>
          <button type="submit"  onClick={eventClick}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
          {persons.map((person,index) => {
            return(
              <li key={index}>{person.name} whit number is {person.number}</li>
              )})}
    </div>
  )
}

export default App;
