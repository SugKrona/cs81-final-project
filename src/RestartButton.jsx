// Gustavo Corona
// src/RestartButton.jsx made August 3, 2025
// GitHub Repository URL: https://github.com/SugKrona/cs81-final-project

import React from 'react';
import styles from './App.module.css';

function RestartButton({ onRestart, playSelectionSound }) { // NEW: Receive the prop
  const buttonStyle = {
    backgroundColor: '#4A2C2A', 
    color: 'white',
    border: 'none',
    padding: '20px 40px',
    borderRadius: '8px',
    fontSize: '2.5rem',
    marginTop: '30px',
    transition: 'background-color 0.2s',
    fontFamily: 'Enchanted Land, sans-serif'
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <button 
        className={styles.buttonHoverCursor} 
        style={buttonStyle} 
        onClick={() => {
          playSelectionSound();
          onRestart();
        }}
      >
        Restart Simulation
      </button>
    </div>
  );
}

export default RestartButton;