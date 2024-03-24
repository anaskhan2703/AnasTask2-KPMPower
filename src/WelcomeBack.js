import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './WelcomeBack.css';

function WelcomePage() {
  const [userData, setUserData] = useState([]);
  const location = useLocation();
  const { state } = location;
  const username = state && state.username;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUserData(data));
  }, []);

  return (
    <div>
      <h1>Welcome, {username}! </h1> 
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {userData.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WelcomePage;
