import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './login';
//import Login from 'src/login.js'; // Import your Login page

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Example Home component */}
          <Route path="/login.js" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h2>Welcome to Skill Swap!</h2>
    <p>Click "Skill Swap" to go to the login page.</p>
  </div>
);

export default App;
