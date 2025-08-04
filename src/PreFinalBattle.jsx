// Gustavo Corona
// src/PreFinalBattle.jsx made August 4, 2025
// GitHub Repository URL: https://github.com/SugKrona/cs81-final-project

import React from 'react';


function PreFinalBattle({ eliminatedHouses, finalists }) {
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

  const nameStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  };

  const imageStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '8px',
    objectFit: 'contain',
    margin: '0 10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
  };
  
  return (
    <div style={displayStyle}>
      <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '20px' }}>The Qualifiers!</h3>
      <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
        The great houses of {eliminatedHouses.map(house => house.name).join(' and ')} have been eliminated.
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', margin: '20px 0' }}>
        {finalists.map(house => (
          <div key={house.id} style={{ textAlign: 'center' }}>
            <img src={house.shieldImage} alt={`${house.name} Shield`} style={imageStyle} />
            <p style={{...nameStyle, marginTop: '10px'}}>{house.name}</p>
          </div>
        ))}
      </div>
      
      <p style={{ fontSize: '1.2rem' }}>
        The final battle between these two houses will be to the death!
      </p>
    </div>
  );
}

export default PreFinalBattle;