import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Simulated authentication
    console.log('Login submitted:', { email, password });
    setError('');
    alert('Login successful!'); // Replace with actual authentication logic
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-heading">Welcome to SkillSwap</h1>
        <p className="login-subheading">Connect - Learn - Grow</p>

        {error && <div className="error-message">{error}</div>}

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button">Log In</button>
        </form>

        <p className="signup-prompt">
          Don't have an account? <a href="/signup.js">Sign up here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;