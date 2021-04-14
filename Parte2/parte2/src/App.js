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
    setPersons(
      [...persons, person]
      )
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
