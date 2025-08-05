// Gustavo Corona
// src/FinalBattleDisplay.jsx made August 4, 2025
// GitHub Repository URL: https://github.com/SugKrona/cs81-final-project

import React from 'react';
import styles from './App.module.css';

function FinalBattleDisplay({ finalists, winner }) {
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

  const finalistNameStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333', 
  };
  
  const winnerCharacterStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    gap: '20px',
    border: '2px solid #555',
    borderRadius: '10px',
    padding: '10px'
  };

  const characterImageStyle = {
    width: '100px',
    height: '100px',
    objectFit: 'cover'
  };

  const loser = finalists.find(house => house.name !== winner.name);
  
  return (
    <div style={displayStyle}>
      <h3 style={{ fontSize: '3rem', color: '#333', marginBottom: '20px' }}>Final Battle!</h3>
      <p style={{ fontSize: '2rem', marginBottom: '10px' }}>
        A final clash between the two great houses: <span style={finalistNameStyle}>{finalists[0].name}</span> and <span style={finalistNameStyle}>{finalists[1].name}</span>!
      </p>
      <h2 className={styles.glowingElement} style={{ fontSize: '3.5rem', color: '#ffc107', marginTop: '30px' }}>
        The Champion is: {winner.name} 🎉🏆
      </h2>
      
      <div style={winnerCharacterStyle}>
          <div style={{ textAlign: 'center' }}>
            <img className={styles.glowingElement} src={winner.riderImage} alt={`${winner.riderName}`} style={characterImageStyle} />
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{winner.riderName}</p>
            <p style={{ fontSize: '1rem', marginTop: '-10px' }}>The Knight</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img className={styles.glowingElement} src={winner.squireImage} alt={`${winner.squireName}`} style={characterImageStyle} />
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{winner.squireName}</p>
            <p style={{ fontSize: '1rem', marginTop: '-10px' }}>The Squire</p>
          </div>
      </div>
      
      {loser && (
        <p style={{ fontSize: '1.5rem', marginTop: '20px', color: '#dc3545', fontStyle: 'italic' }}>
          May the fallen knight, {loser.riderName}, find peace in the eternal halls of valor.
        </p>
      )}
    </div>
  );
}

export default FinalBattleDisplay;