import React, { useState } from 'react';
import './signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    // Add your API call or logic here
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
      <h1 className="signup-title">Sign Up for SkillSwap</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter a strong password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="confirm_password"
            id="confirm_password"
            name="confirm_password"
            value={formData.confirmpassword}
            onChange={handleChange}
            placeholder="Enter the password"
            required
          />
        </div>
        <button type="submit" className="submit-button">Sign Up</button>
      </form>
      <p className="signup-prompt">
          Already have an account? <a href="/login.js">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
