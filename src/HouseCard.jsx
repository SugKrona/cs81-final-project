// Gustavo Corona
// src/HouseCard.jsx made August 4, 2025
// GitHub Repository URL: https://github.com/SugKrona/cs81-final-project

import React from 'react';
import { useState } from 'react';

function HouseCard({ name, shieldImage, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    padding: '20px',
    margin: '10px',
    borderRadius: '10px',
    border: '2px solid #5d4d3d', 
    background: isHovered
      ? 'linear-gradient(to bottom, #d2c8be, #b8a996)' 
      : 'linear-gradient(to bottom, #b8a996, #a69a89)', 
    color: '#333', 
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'box-shadow 0.2s, transform 0.2s, background 0.2s',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)', 
    boxShadow: isHovered ? '0 0 15px rgba(255,255,255,0.2)' : '0 4px 8px rgba(0, 0, 0, 0.3)',
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    marginBottom: '10px',
    objectFit: 'cover'
  };

  const nameStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  return (
    <div
      style={cardStyle}
      onClick={() => onSelect(name)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={shieldImage} alt={`${name} shield`} style={imageStyle} />
      <div style={nameStyle}>{name}</div>
    </div>
  );
}

export default HouseCard;