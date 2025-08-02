// Gustavo Corona
// src/App.jsx made August 1, 2025
// GitHub Repository URL: https://github.com/SugKrona/cs81-final-project

import React, { useState } from 'react';
import './index.css';
import HouseSelector from './HouseSelector';

const houseData = [
  { id: 1, name: 'House Monty Python', score: 0, emoji: '🐍' },
  { id: 2, name: 'House Javaskript', score: 0, emoji: '☕' },
  { id: 3, name: 'The Ruby Order', score: 0, emoji: '💎' },
  { id: 4, name: 'House Swiftwind', score: 0, emoji: '🐴' }
];

function App() {
  const [gameState, setGameState] = useState('start');
  const [houses, setHouses] = useState(houseData);
  const [userChoice, setUserChoice] = useState(null);

  const handleHouseChoice = (houseName) => {
    setUserChoice(houseName);
    setGameState('challenge-1');
  };

  return (
    <div className="App">
      <h1 style={{ color: 'white' }}>Joust Simulator</h1>
      
      {gameState === 'start' && (
        <HouseSelector houses={houses} onSelect={handleHouseChoice} />
      )}

      {gameState !== 'start' && (
        <p style={{ color: 'white' }}>Your choice: {userChoice}. The challenges will begin shortly!</p>
      )}

    </div>
  );
}

export default App;