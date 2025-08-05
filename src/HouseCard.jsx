// Gustavo Corona
// src/HouseCard.jsx made August 4, 2025
// GitHub Repository URL: https://github.com/SugKrona/cs81-final-project

import React from 'react';
import { useState } from 'react';
import styles from './App.module.css';

// Defines a reusable component to display a single house's details.
function HouseCard({ name, shieldImage, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    padding: '20px',
    margin: '10px',
    borderRadius: '10px',
    border: '2px solid #555',
    backgroundColor: isHovered ? 'rgba(150, 136, 120, 0.9)' : 'rgba(184, 169, 150, 0.9)',
    color: '#333',
    textAlign: 'center',
    transition: 'background-color 0.2s, transform 0.2s',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    boxShadow: isHovered ? '0 0 15px rgba(255,255,255,0.2)' : 'none',
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    marginBottom: '10px',
    objectFit: 'cover'
  };

  const nameStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
  };

  return (
    <div
      className={styles.houseCard}
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