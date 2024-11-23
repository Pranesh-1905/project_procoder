import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import './LoginScreen.css';

const LoginScreen = () => { 
  const [identifier, setIdentifier] = useState(''); // Changed to identifier
  const [password, setPassword] = useState(''); 
  const nav = useNavigate();

  const handleLogin = () => { 
    // Validation for identifier (phone number or email) and password
    const phoneRegex = /^[0-9]{10}$/; // Simple regex for 10-digit phone numbers
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for valid email

    if (!identifier || !password) { 
      alert('Please enter a valid phone number or email and password'); 
      return; 
    }

    if (!phoneRegex.test(identifier) && !emailRegex.test(identifier)) {
      alert('Please enter a valid phone number or email address');
      return;
    }

    nav('/Home'); 
  };

  return ( 
    <div className='total'>
      <div className="login-container">
        <div className="login-header">
          <h1 className="login-title">ProCoder</h1>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5SQntNi68ASSiKFpRVzQOMfJCx5aYevH69w&s" alt="Weather Icon" className="login-weather-icon" />
          </div>
        </div>

        <div className="login-form">
          <label className="login-label">Phone Number or Email</label>
          <input
            className="login-input"
            placeholder="Enter your phone number or email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            type="text" // Changed to text to accept email
          />

          <label className="login-label">Password</label>
          <input
            className="login-input"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <button className="login-button" onClick={handleLogin}>Login</button>
          <button className="login-button" onClick={() => nav('/Reg')}>Register</button>
        </div>
      </div>
    </div>
  ); 
};

export default LoginScreen;