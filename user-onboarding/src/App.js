import React, { useState } from 'react';
import './App.css';

//import Form from Form.js
import Form from './components/Form.js';


function App() {
  //need state for returned data from server
  const [users, setUsers] = useState([]);

  function addUsers(userData) {
    console.log('Users Before', users)
    const newUser = userData;
    setUsers([...users, newUser]);
    console.log('User Data', userData);
    console.log('Users after', users)
  };

  return (
    <div className="App">
      <h1>Create an Account</h1>
      <Form addUsers={addUsers}/>
      <h2>Existing Users</h2>
      <pre>
        {JSON.stringify(users)}
        {console.log('users in jsx', users)}
      </pre>
    </div>
  );
}

export default App;
