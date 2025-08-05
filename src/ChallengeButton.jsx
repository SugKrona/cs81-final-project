// Gustavo Corona
// src/ChallengeButton.jsx made August 3, 2025
// GitHub Repository URL: https://github.com/SugKrona/cs81-final-project

import React from 'react';
import styles from './App.module.css';

function ChallengeButton({ challengeName, onStart }) {
  const buttonStyle = {
    backgroundColor: '#4A2C2A',
    color: 'white',
    border: 'none',
    padding: '20px 40px',
    borderRadius: '8px',
    fontSize: '2.5rem',
    marginTop: '20px',
    transition: 'background-color 0.2s',
    fontFamily: 'Enchanted Land, sans-serif'
  };

  const textStyle = {
    color: 'white',
    fontSize: '1.5rem',
    marginBottom: '15px',
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <p style={textStyle}>{challengeName}</p>
      <button 
        className={styles.buttonHoverCursor} 
        style={buttonStyle} 
        onClick={onStart}
      >
        Start Challenge
      </button>
    </div>
  );
}

export default ChallengeButton;