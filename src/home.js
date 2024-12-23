import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="home-header">
        <h1>Welcome to SkillSwap</h1>
        <p>Connect - Learn - Grow</p>
        <nav className="nav-bar">
          <a href="#features">Features</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>
      </section>

      <section id="features" className="section">
        <h2>Features</h2>
        <p>Explore skills, connect with professionals, and grow together.</p>
      </section>

      <section id="about" className="section">
        <h2>About Us</h2>
        <p>
          SkillSwap is a platform that fosters learning and collaboration among
          individuals worldwide.
        </p>
      </section>

      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>Email: info@skillswap.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 SkillSwap. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
