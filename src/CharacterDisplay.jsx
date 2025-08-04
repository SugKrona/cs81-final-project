// Gustavo Corona
// src/CharacterDisplay.jsx made August 4, 2025
// GitHub Repository URL: https://github.com/SugKrona/cs81-final-project

import React from 'react';

function CharacterDisplay({ riderName, squireName, lore, shieldImage, riderImage, squireImage }) { // ADDED: rider and squire images
  const containerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    padding: '20px',
    borderRadius: '10px',
    color: 'white',
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
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: '15px'
  };

  const nameStyle = {
    fontSize: '1.2rem',
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
      <p style={{ fontSize: '1rem' }}>{lore}</p>
    </div>
  );
}

export default CharacterDisplay;