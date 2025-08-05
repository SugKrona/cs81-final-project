// Gustavo Corona
// src/PreFinalBattle.jsx made August 4, 2025
// GitHub Repository URL: https://github.com/SugKrona/cs81-final-project

import React from 'react';


function PreFinalBattle({ eliminatedHouses, finalists }) {
  const displayStyle = {
    backgroundColor: 'rgba(184, 169, 150, 0.9)',
    padding: '20px',
    borderRadius: '10px',
    color: '#333',
    maxWidth: '600px',
    margin: '20px auto',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
  };

  const nameStyle = {
    // UPDATED: Increased font size
    fontSize: '2rem',
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
  
  const characterImageStyle = {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    margin: '10px 5px',
  };
  
  return (
    <div style={displayStyle}>
      {/* UPDATED: Increased font size */}
      <h3 style={{ fontSize: '3rem', color: '#333', marginBottom: '20px' }}>The Qualifiers!</h3>
      {/* UPDATED: Increased font size */}
      <p style={{ fontSize: '2rem', marginBottom: '10px' }}>
        The great houses of {eliminatedHouses.map(house => house.name).join(' and ')} have been eliminated.
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', margin: '20px 0' }}>
        {finalists.map(house => (
          <div key={house.id} style={{ textAlign: 'center' }}>
            <img src={house.shieldImage} alt={`${house.name} Shield`} style={imageStyle} />
            <p style={{...nameStyle, marginTop: '10px'}}>{house.name}</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
              <img src={house.riderImage} alt={`${house.riderName}`} style={characterImageStyle} />
              <img src={house.squireImage} alt={`${house.squireName}`} style={characterImageStyle} />
            </div>
          </div>
        ))}
      </div>
      
      {/* UPDATED: Increased font size */}
      <p style={{ fontSize: '2rem' }}>
        The final battle between these two houses will be to the death!
      </p>
    </div>
  );
}

export default PreFinalBattle;