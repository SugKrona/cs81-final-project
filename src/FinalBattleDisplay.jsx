// Gustavo Corona
// src/FinalBattleDisplay.jsx made August , 2025
// GitHub Repository URL: https://github.com/SugKrona/cs81-final-project

import React from 'react';


function FinalBattleDisplay({ finalists, winner }) {
  const displayStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '20px',
    borderRadius: '10px',
    color: 'white',
    maxWidth: '600px',
    margin: '20px auto',
    textAlign: 'center'
  };

  const finalistNameStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white'
  };

  return (
    <div style={displayStyle}>
      <h3 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '20px' }}>Final Battle!</h3>
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