import './Login.css'
import React from 'react';
import { account, ID } from './appwrite';
import GoogleButton from 'react-google-button'
import { useState } from 'react';
import background from './assets/Purple.png';


function Login() {
  
  //initialized the state of inputs for sign up
  const [email, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [loginEmail, setLoginUser] = useState("");  //initialized the state of inputs for login
  const [loginPassword, setLoginPassword] = useState("");
  
  async function handleLogin() { // Login with Google by creating an OAuth2 session
    account.createOAuth2Session('google', 'http://localhost:5173', 'http://localhost:5173/fail')
  }

  async function handleCreateAccount() { // Create an account using username and password
    const promise = account.create(ID.unique(), email, password);
    promise.then(function (response) {
      console.log(response); // Success
  }, function (error) {
      console.log(error); // Failure
  });
  }

  async function handleExistingAccount() { // Login with an existing account
    const promise = account.createEmailPasswordSession(loginEmail, loginPassword);
    promise.then(function (response) {
      console.log(response); // Success
  }, function (error) {
      console.log(error); // Failure
  });

  }

  function toggle() { // Toggle between Sign Up and Sign In screens 
    const signUp = document.querySelector('.signUp');
    const signIn = document.querySelector('.signIn');
    const signUpBtn = document.querySelector('.signup-btn');
    const signInBtn = document.querySelector('.singin-btn');

    if (signUp.style.display === 'none') {
      signUp.style.display = 'block';
      signIn.style.display = 'none';
      signUpBtn.style.display = 'none';
      signInBtn.style.display = 'block';
    } else {
      signUp.style.display = 'none';
      signIn.style.display = 'block';
      signUpBtn.style.display = 'block';
      signInBtn.style.display = 'none';
    }
    
  }

  return (
    <div className="loginPage">

      <img src={background} alt='background' className='background'/> {/* Background image*/}
      <div className='container'>
        <div className='signUp' style={{display: 'none'}}>   {/* Sign up hidden by default*/}
          <h1>Sign Up</h1>
          <input type="email" placeholder="Email" onChange={e => setUser(e.target.value)}/>       {/* Inputs for signup*/}          
          <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
          <button onClick={handleCreateAccount}>Create Account</button>   {/* Button to create account*/}

          <h3>Or Sign-in With Google:</h3>
          <GoogleButton onClick={handleLogin}/>  {/* Button to sign in with Google*/}
          <h3>Or Sign-In Using</h3>
          <button className='singin-btn' onClick={toggle}>Sign-In</button>  {/* Button to toggle to sign in screen*/}
        </div>
      
        <div className='signIn'>
          <h1>Login</h1> 
          <input type="email" placeholder="Type your email" onChange={e => setLoginUser(e.target.value)}/> {/* Inputs for sign in*/}
          <input type="password" placeholder="Type your password" onChange={e => setLoginPassword(e.target.value)}/> 
          <button onClick={handleExistingAccount}>Login</button>  {/* Button to login*/}

          <h3>Or Sign-In With Google:</h3>
          <GoogleButton onClick={handleLogin}/> {/* Button to sign in with Google*/}

          <h3>Or Sign-Up Using:</h3>
          <button className=' signup-btn' onClick={toggle}>Sign Up</button> {/* Button to toggle to sign up screen*/}
        </div>
      </div>
    </div>
  );
}
export default Login
