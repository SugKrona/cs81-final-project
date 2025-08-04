// Gustavo Corona
// src/Scoreboard.jsx made August 4, 2025
// GitHub Repository URL: https://github.com/SugKrona/cs81-final-project

import React from 'react';

function Scoreboard({ houses, userChoice, finalists = [], winner }) {
  const scoreboardStyle = {
    backgroundColor: 'rgba(184, 169, 150, 0.9)', 
    padding: '20px',
    borderRadius: '10px',
    color: '#333', 
    maxWidth: '600px',
    margin: '20px auto',
    textAlign: 'left',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
  };

  const listStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '0'
  };

  const scoreItemStyle = {
    marginBottom: '10px',
    fontSize: '1.2rem'
  };

  const highlightStyle = {
    color: '#007bff',
    fontWeight: 'bold'
  };

  const losingStyle = {
    color: 'red',
    textDecoration: 'line-through'
  };

  return (
    <div style={scoreboardStyle}>
      <h3 style={{ textAlign: 'center', marginBottom: '15px' }}>Current Scores</h3>
      <ul style={listStyle}>
        {[...houses].sort((a,b) => b.score - a.score).map(house => {
          const isWinner = house.name === winner;
          const isSecondPlace = finalists.length > 0 && house.name === finalists[1].name;
          const isUserChoice = house.name === userChoice;
          const isEliminated = finalists.length > 0 && !finalists.some(finalist => finalist.name === house.name);

          let emoji = '';
          if (isWinner) {
            emoji = ' 🏆';
          } else if (isSecondPlace) {
            emoji = ' 💀';
          }
          
          let style = {};
          if (isUserChoice) {
            style = highlightStyle;
          }

          if (isEliminated || isSecondPlace) {
            style = { ...style, ...losingStyle };
          }
          if (isWinner) {
            style = { ...style, color: '#ffc107', textDecoration: 'none' };
          }

          return (
            <li key={house.id} style={{ ...scoreItemStyle, ...style }}>
              {house.name}{isUserChoice ? ' ⭐' : ''}: {house.score} points{emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Scoreboard;