// Gustavo Corona
// src/CharacterDisplay.jsx made August 4, 2025
// GitHub Repository URL: https://github.com/SugKrona/cs81-final-project

import React from 'react';

function CharacterDisplay({ riderName, squireName, lore, shieldImage, riderImage, squireImage }) {
  const containerStyle = {
    backgroundColor: 'rgba(184, 169, 150, 0.9)', 
    padding: '20px',
    borderRadius: '10px',
    color: '#333', 
    maxWidth: '600px',
    margin: '20px auto',
    textAlign: 'left'
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    marginBottom: '10px',
    objectFit: 'cover'
  };

  const characterImageStyle = {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    marginRight: '15px'
  };

  const nameStyle = {
    // UPDATED: Increased font size
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '5px'
  };

  return (
    <div style={containerStyle}>
      <div style={{ textAlign: 'center' }}>
        <img src={shieldImage} alt="House Shield" style={imageStyle} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        <img src={riderImage} alt={`${riderName}`} style={characterImageStyle} />
        <p style={nameStyle}>The Knight: {riderName}</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
        <img src={squireImage} alt={`${squireName}`} style={characterImageStyle} />
        <p style={nameStyle}>The Squire: {squireName}</p>
      </div>
      <hr style={{ border: '1px solid #555', margin: '15px 0' }} />
      {/* UPDATED: Increased font size */}
      <p style={{ fontSize: '1.5rem' }}>{lore}</p>
    </div>
  );
}

export default CharacterDisplay;