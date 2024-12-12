import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './login';
import Signup from './signup';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login.js" element={<Login />} />
          <Route path="/signup.js" element={<Signup />} /> {/* Add route for Signup */}
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="home-container">
    <h1 className="title">Welcome to <span className="highlight">Skill Swap!</span></h1>
    <p className="description">A place to exchange skills and knowledge.</p>
    <Link to="/login.js" className="button">Get Started</Link>
  </div>
);

export default App;
