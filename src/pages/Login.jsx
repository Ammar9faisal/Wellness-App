import './Login.css';
import { React, useState } from 'react';
import { account, ID } from '../appwrite';
import GoogleButton from 'react-google-button';
import background from '../assets/Purple.png';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate(); // Hook for navigation

  // State for sign-up inputs
  const [email, setUser] = useState("");
  const [password, setPassword] = useState("");

  // State for login inputs
  const [loginEmail, setLoginUser] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Email validation function
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Google OAuth Login
  async function handleLogin() {
    account.createOAuth2Session('google', 'http://localhost:5173/dashboard', 'http://localhost:5173/fail');
  }

  // Create a new account
  async function handleCreateAccount() {
    if (!email || !password) {
      alert('Please enter a valid email and password');
      return;
    }
    if (!validateEmail(email)) {
      alert('Please enter a valid email');
      return;
    }

    try {
      const response = await account.create(ID.unique(), email, password);
      console.log(response); // Log success response
      navigate('/dashboard'); // Redirect to dashboard after account creation
    } catch (error) {
      console.error(error); // Log failure response
      alert("Error creating account. Please try again.");
    }
  }

  // Login with existing account
  async function handleExistingAccount() {
    if (!loginEmail || !loginPassword) {
      alert('Please enter a valid email and password');
      return;
    }
    if (!validateEmail(loginEmail)) {
      alert('Please enter a valid email');
      return;
    }

    try {
      const response = await account.createEmailPasswordSession(loginEmail, loginPassword);
      console.log(response); // Log success response
      navigate('/dashboard'); // Redirect to dashboard after successful login
    } catch (error) {
      console.error(error); // Log failure response
      alert("Invalid credentials. Please try again.");
    }
  }

  // Toggle between Sign-Up and Sign-In views
  function toggle() {
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
      <img src={background} alt="background" className="background" />
      <div className="container">
        {/* Sign Up Form */}
        <div className="signUp" style={{ display: 'none' }}>
          <h1>Sign Up</h1>
          <input type="email" placeholder="Email" onChange={e => setUser(e.target.value)} />
          {email && !validateEmail(email) && <p style={{ color: 'red' }}>Invalid email format</p>}
          <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          <button onClick={handleCreateAccount}>Create Account</button>

          <h3>Or Sign-in With Google:</h3>
          <GoogleButton onClick={handleLogin} />
          <h3>Or Sign-In Using:</h3>
          <button className="singin-btn" onClick={toggle}>Sign-In</button>
        </div>

        {/* Sign In Form */}
        <div className="signIn">
          <h1>Login</h1>
          <input type="email" placeholder="Type your email" onChange={e => setLoginUser(e.target.value)} />
          {loginEmail && !validateEmail(loginEmail) && <p style={{ color: 'red' }}>Invalid email format</p>}
          <input type="password" placeholder="Type your password" onChange={e => setLoginPassword(e.target.value)} />
          <button onClick={handleExistingAccount}>Login</button>

          <h3>Or Sign-In With Google:</h3>
          <GoogleButton onClick={handleLogin} />

          <h3>Or Sign-Up Using:</h3>
          <button className="signup-btn" onClick={toggle}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
