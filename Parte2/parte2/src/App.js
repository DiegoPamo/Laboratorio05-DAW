import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const eventRename = (event) => {
    setNewName(event.target.value)
  }

  const eventClick = (event) => {

    event.preventDefault()
    const person = {name: newName}

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
    } else {
      window.alert('El nombre ' +NewName+' ya existe en su lista');
      setNewName("")
    }

  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input type="text" value={newName} onChange={eventRename} />
        </div>
        <div>
          <button type="submit"  onClick={eventClick}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
          {persons.map((person,index) => {return(<li key={index}>{person.name}</li>)})}
    </div>
  )
}

export default App;
