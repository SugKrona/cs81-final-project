// Gustavo Corona
// src/RestartButton.jsx made August , 2025
// GitHub Repository URL: https://github.com/SugKrona/cs81-final-project

import React from 'react';

function RestartButton({ onRestart }) {
  const buttonStyle = {
    backgroundColor: '#dc3545', 
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '30px',
    transition: 'background-color 0.2s',
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <button style={buttonStyle} onClick={onRestart}>
        Restart Simulation
      </button>
    </div>
  );
}

export default RestartButton;