import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterName, setfilterName] = useState('');

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

  const filteredPersons = persons.filter(({ name }) => name.startsWith(filterName));

  const handleFilterChange = event => {
    setfilterName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with <input value={filterName} onChange={handleFilterChange} />
      </div>
      <div>
        <h2>Add a new</h2>
        <form onSubmit={addPerson}>
          <div>Name: <input value={newName} onChange={handleNameInput} /></div>
          <div>Number: <input value={newNumber} onChange={handleNumberInput} /></div>
          <div><button type="submit">Add</button></div>
        </form>
      </div>
      <div>
        <h2>Numbers</h2>
        <ul>
          {filteredPersons.map(({ name, number }) =>
            <li key={name}>{name} {number}</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
