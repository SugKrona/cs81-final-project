// Gustavo Corona
// src/FinalBattleDisplay.jsx made August 4, 2025
// GitHub Repository URL: https://github.com/SugKrona/cs81-final-project

import React from 'react';

function FinalBattleDisplay({ finalists, winner }) {
  const displayStyle = {
    backgroundColor: '#e0d3c6', 
    padding: '20px',
    borderRadius: '10px',
    color: '#333', 
    maxWidth: '600px',
    margin: '20px auto',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
  };

  const finalistNameStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333', 
  };

  return (
    <div style={displayStyle}>
      <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '20px' }}>Final Battle!</h3>
      <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
        A final clash between the two great houses: <span style={finalistNameStyle}>{finalists[0].name}</span> and <span style={finalistNameStyle}>{finalists[1].name}</span>!
      </p>
      <h2 style={{ fontSize: '2rem', color: '#ffc107', marginTop: '30px' }}>
        The Champion is: {winner} 🎉🏆
      </h2>
    </div>
  );
}

export default FinalBattleDisplay;