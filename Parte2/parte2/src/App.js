import React, { useState } from 'react'

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
      <div>filter shown with: <input type="text" onChange={filterSearch}/></div>
      <h3>Add a new</h3>
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
          {persons.filter((nombre) => 
            nombre.name.includes(filter)).map((person) => 
              <li key={person.name}>{person.name} whit number: {person.number}</li>)}
    </div>
  )
}
export default App;
