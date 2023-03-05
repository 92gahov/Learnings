import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUser } from './features/Users';

const App = () => {

  const dispatch = useDispatch();

  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [newUserName, setNewUserName] = useState("");

  return (
    <div className='App'>
      <div className='addUser'>
        <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Name...' />
        <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder='Username...' />
        <button onClick={() => { dispatch(addUser({ id: userList[userList.length - 1].id + 1, name: name, username: userName })) }}>Add User</button>
      </div>
      <div className='displayUsers'>
        {
          userList.map((user) => {
            return <div>
              <h1>{user.name}</h1>
              <h1>{user.username}</h1>
              <input onChange={(e) => setNewUserName(e.target.value)} type="text" placeholder='New Username...' />
              <button onClick={() => dispatch(updateUser({ id: user.id, username: newUserName }))}>Update Username</button>
              <button onClick={() => dispatch(deleteUser({ id: user.id }))}>Delete Username</button>
            </div>
          })
        }
      </div>
    </div>
  )
};

export default App;
