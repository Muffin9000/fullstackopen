import { useState } from 'react'

const Persons = ({persons}) => {
  return (
    <>
    {persons.map(person => 
      <li key={person.id}>
        {person.name} {person.number}
      </li>
    )}
    </>
  )
}

const Filter = ({value, onChange}) => {
  return (
    <div>
      filter shown with: <input 
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

const PersonForm = ({onSubmit, inputOneValue, inputOneOnChange, inputTwoValue, InputTwoOnChange}) => {
  return (
    <form
      onSubmit={onSubmit}>
      <div>
          name: <input 
            value={inputOneValue}
            onChange={inputOneOnChange}
          />
        </div>
        <div>
          number: <input 
            value={inputTwoValue}
            onChange={InputTwoOnChange}
          />
            
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  const userInputSomething = (event) => {
     setNewName(event.target.value)
  }

  const userInputPhone = (event) => {
    setNewPhone(event.target.value)
    
  }

  const userInputNameFilter = (event) => {
    setNameFilter(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const phoneObject = {
      name: newName,
      number: newPhone,
      id: persons.length + 1,
    }
    if(persons.filter(p => p.name === phoneObject.name).length === 0){
      setPersons(persons.concat(phoneObject))
    }else{
      alert(`${phoneObject.name} is already adeed to phonebook`)
    }
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={nameFilter} onChange={userInputNameFilter} />
      <PersonForm 
        onSubmit={addName} 
        inputOneValue={newName} 
        inputOneOnChange={userInputSomething}
        inputTwoValue={newPhone}
        InputTwoOnChange={userInputPhone}
      />
      <h2>Numbers</h2>
      <Persons persons={persons.filter((person) => person.name.includes(nameFilter))} />
    </div>
  )
}

export default App