import React from 'react';
import './homepage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-box">
        <h1 className="homepage-heading">Welcome to SkillSwap!</h1>
        <p className="homepage-subheading">Where skills meet opportunity</p>
        <div className="homepage-actions">
          <button className="homepage-button" onClick={() => alert('Explore Features!')}>
            Explore Features
          </button>
          <button className="homepage-button" onClick={() => alert('Start Connecting!')}>
            Start Connecting
          </button>
        </div>
        <p className="homepage-footer">
          Need help? Visit our <a href="/help.js">Help Center</a>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
