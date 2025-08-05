// Gustavo Corona
// src/PreChallenge.jsx
// GitHub Repository URL: https://github.com/SugKrona/cs81-final-project

import React from 'react';
import ChallengeButton from './ChallengeButton';

function PreChallenge({ challengeName, challengeDescription, onStart }) {
  const containerStyle = {
    textAlign: 'center',
    backgroundColor: 'rgba(184, 169, 150, 0.9)', 
    color: '#333',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '600px',
    margin: '20px auto'
  };

  const titleStyle = {
    fontSize: '3rem',
    marginBottom: '10px'
  };

  const descriptionStyle = {
    fontSize: '2rem',
    marginBottom: '20px'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>{challengeName}</h2>
      <p style={descriptionStyle}>{challengeDescription}</p>
      <ChallengeButton challengeName="" onStart={onStart} />
    </div>
  );
}

export default PreChallenge;