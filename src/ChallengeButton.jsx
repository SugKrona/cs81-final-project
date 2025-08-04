// Gustavo Corona
// src/ChallengeButton.jsx made August 3, 2025
// GitHub Repository URL: https://github.com/SugKrona/cs81-final-project

import React from 'react';

function ChallengeButton({ challengeName, onStart }) {
  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background-color 0.2s',
  };

  const textStyle = {
    color: 'white',
    fontSize: '1.5rem',
    marginBottom: '15px',
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <p style={textStyle}>{challengeName}</p>
      <button style={buttonStyle} onClick={onStart}>
        Start Challenge
      </button>
    </div>
  );
}

export default ChallengeButton;