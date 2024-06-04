import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.scss';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    dob: '',
    countryCode: '',
    phoneNumber: '',
    password: ''
  });

  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signup', formData);
      alert(response.data);
    } catch (error) {
      if (error.response && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        alert('Error: ' + error.message);
      }
    }
  };

  return (
    <div>
      <div className="s-container">
        <div className="s-space">
          <div className="s-head">
            <h2>Create New Account</h2>
            <p>By using our service you are agreeing to our Terms & Conditions</p>
          </div>
          <form onSubmit={handleSubmit} className="s-inputs">
            <ul>
              <li><input type="text" name="name" placeholder='Name' onChange={handleChange} required/></li>
              <li><input type="text" name="username" placeholder='Username' onChange={handleChange} required/></li>
              <li><input type="email" name="email" placeholder='Email ID' onChange={handleChange} required/></li>
              <li><input type="date" name="dob" placeholder='mm/dd/yyyy' onChange={handleChange} required/></li>
              <li>
                <div style={{ display: 'flex' }}>
                  <input type="number" name="phoneNumber" placeholder='Phone Number' style={{ width: '70%' }} onChange={handleChange} required/>
                </div>
              </li>
              <li>
                <input type="password" name="password" placeholder='Set Password' onChange={handleChange} required/>
                <p>Must contain at least 7 characters, including numbers, letters, and special characters.</p>
              </li>
              <li><button type="submit">Create Account</button></li>
            </ul>
          </form>
          {errors.length > 0 && (
            <ul>
              {errors.map((error, index) => (
                <li key={index} style={{ color: 'red' }}>{error}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
