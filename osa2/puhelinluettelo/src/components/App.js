import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addPerson = event => {
    event.preventDefault();
    if (persons.find(({ name }) => name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons([...persons, { name: newName, number: newNumber }]);
      setNewName('');
      setNewNumber('');
    }
  };

  const handleNameInput = event => {
    setNewName(event.target.value);
  };

  const handleNumberInput = event => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>Name: <input value={newName} onChange={handleNameInput} /></div>
        <div>Number: <input value={newNumber} onChange={handleNumberInput} /></div>
        <div><button type="submit">Add</button></div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(({ name, number }) => <li key={name}>{name} {number}</li>)}
      </ul>
    </div>
  );
};

export default App;
