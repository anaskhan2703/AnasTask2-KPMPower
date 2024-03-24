import './LoginCard.css';
import React, { useState } from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

function LoginPage(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  function onButtonClick(){
      setError('')

      if (username !== 'example@example.com' && password !== 'password') {
        setError('Username or Password Incorrect')
      } else {
        navigate('/welcome', { state: { username } });
      }

  }
  

  return (
    <div className="login-page">
      <div className='title'>
        <h1>Sign in with </h1>
      </div>
      <div className='otherlogins'>
        <button className='FBbutton' onClick={() => window.location.href = "https://www.facebook.com"}> <FaFacebookSquare className='FaFacebookSquare' /> Facebook</button>
        <button className='Googlebutton' onClick={() => window.location.href = "https://www.google.com"}> <FcGoogle className='FaGoogle'/> Google</button>
      </div>

      <label className="errorLabel">{error}</label>
      <div className='inputcontainer'>
        <p>Username</p>
        <input value={username} onChange={(ev) => setUsername(ev.target.value)} className='inputBox'/>
      </div>
      <br/>
      <div className='inputcontainer'>
        <p>Password<span>Forgot?</span></p>
        <input value={password} onChange={(ev) => setPassword(ev.target.value)} className='inputBox'/>
      </div>
      <br/>
      <div className={'inputContainer'}>
        <input className='inputButton' type="button" onClick={onButtonClick} value={'Sign in'} />
      </div>
      <p>Not a member?<span>Sign up now</span></p>
    </div>
  );
};

export default LoginPage;

