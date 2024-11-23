import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterScreen.css';
const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [leetcodeProfile, setLeetcodeProfile] = useState('');
  const [geeksforgeeksProfile, setGeeksforgeeksProfile] = useState('');
  const [linkedinProfile, setLinkedinProfile] = useState('');
  const [errors, setErrors] = useState({});
  const nav = useNavigate();
  const handleRegister=()=>{
    nav("/login") && !urlRegex.test(geeksforgeeksProfile)) {
      newErrors.geeksforgeeksProfile = 'Please enter a valid GeeksforGeeks profile link.';
    }
    if (linkedinProfile && !urlRegex.test(linkedinProfile)) {
      newErrors.linkedinProfile = 'Please enter a valid LinkedIn profile link.';
    }

    // If there are errors, set them and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert('Registration Successful');
    nav('./Login');
  };

  return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'space-around'}}>

      <center>
      <div className='img'>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5SQntNi68ASSiKFpRVzQOMfJCx5aYevH69w&s"} alt="" />
          <h1 style={{fontSize:'45px'}}> ProCoder</h1>
          <h2>"First, solve the problem. Then, write the code."<br></br> <i>- John Johnson</i></h2>
          <i><p style={{fontSize:'20px'}}>Focus on understanding the problem before diving into coding.</p></i>
          <button className="login-button" onClick={() => nav('/')}>Login</button>

      </div>
          </center>
      <div className='total'>
      <div className="register-container">
        <center><h1>Register</h1></center>
        <div className="register-form">
          <label className="register-label">Name</label>
          <input
            className="register-input"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}

          <label className="register-label">Phone Number</label>
          <input
            className="register-input"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="tel"
            />
          {errors.phoneNumber && <div className="error-message">{errors.phoneNumber}</div>}

          <label className="register-label">Email</label>
          <input
            className="register-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            />
          {errors.email && <div className="error-message">{errors.email}</div>}

          <label className="register-label">Password</label>
          <input
            className="register-input "
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            />
          {errors.password && <div className="error-message">{errors.password}</div>}

          <label className="register-label">Confirm Password</label>
          <input
            className="register-input"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
          />
          {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}

          <label className="register-label">LeetCode Profile Link</label>
          <input
            className="register-input"
            placeholder="Enter your LeetCode profile link"
            value={leetcodeProfile}
            onChange={(e) => setLeetcodeProfile(e.target.value)}
          />
          {errors.leetcodeProfile && <div className="error-message">{errors.leetcodeProfile}</div>}

          <label className="register-label">GeeksforGeeks Profile Link</label>
          <input
            className="register-input"
            placeholder="Enter your GeeksforGeeks profile link"
            value={geeksforgeeksProfile}
            onChange={(e) => setGeeksforgeeksProfile(e.target.value)}
          />
          {errors.geeksforgeeksProfile && <div className="error-message">{errors.geeksforgeeksProfile}</div>}

          <label className="register-label">LinkedIn Profile Link</label>
          <input
            className="register-input"
            placeholder="Enter your LinkedIn profile link"
            value={linkedinProfile}
            onChange={(e) => setLinkedinProfile(e.target.value)}
            />
          {errors.linkedinProfile && <div className="error-message">{errors.linkedinProfile}</div>}

          <button className="register-button" onClick={handleRegister}>Submit</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default RegisterScreen;