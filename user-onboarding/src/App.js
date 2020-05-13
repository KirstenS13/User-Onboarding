import React, { useState } from 'react';
import './App.css';

//import Form from Form.js
import Form from './components/Form.js';


function App() {
  //need state for returned data from server
  const [users, setUsers] = useState([]);

  function addUser(userData) {
    setUsers(users.push(userData))
    console.log(users)
  };

  return (
    <div className="App">
      <h1>Create an Account</h1>
      <Form addUser={addUser}/>
      <h2>Existing Users</h2>
      
    </div>
  );
}

export default App;
