// Gustavo Corona
// src/App.jsx made August 2, 2025
// GitHub Repository URL: https://github.com/SugKrona/cs81-final-project

import React, { useState } from 'react';
import './index.css';
import HouseSelector from './HouseSelector';
import CharacterDisplay from './CharacterDisplay';


const houseData = [
  { 
    id: 1, 
    name: 'House Monty Python', 
    score: 0, 
    emoji: '🐍', 
    shieldImage: '/images/HousePython.png', 
    riderName: 'Sir Lancelot of Python',
    squireName: 'Patsy',
    lore: "Known for their unorthodox tactics and a fierce dedication to the Great Serpent of Indentation, House Monty Python has long been considered an underdog. Sir Lancelot, a master of absurd jousting techniques, and his squire Patsy, known for his trusty coconut shells, are the very image of House Python's unpredictable nature. They believe in defying convention, often winning tournaments through clever pranks and sheer absurdity, much to the annoyance of the more serious houses like The Ruby Order." 
  },
  { 
    id: 2, 
    name: 'House Javaskript', 
    score: 0, 
    emoji: '☕', 
    shieldImage: '/images/HouseJavaskript.png',
    riderName: 'Duke Jax the Unyielding',
    squireName: 'Byte',
    lore: "A new order that wields chaotic power from their three-headed dragon, breaking the logic of the old world. Their fearless rider, Duke Jax, a prodigy knight known for his agility, and his squire, Byte, who archives every battle detail, are the face of this powerful yet unpredictable force. They hail from a distant, futuristic land, and their modular magic allows them to adapt to any foe, making them a wild card in any tournament they enter."
  },
  { 
    id: 3, 
    name: 'The Ruby Order', 
    score: 0, 
    emoji: '💎', 
    shieldImage: '/images/TheRubyOrder.png',
    riderName: 'Lady Ruby Redblade',
    squireName: 'Gem',
    lore: "An ancient and noble clan who believe true strength lies in elegance of code. They are known for their beautiful, simple solutions and their disciplined approach. Lady Ruby, a graceful and precise jouster, and her squire, Gem, a master polisher of armor, represent the disciplined legacy of this dominant force. They follow a strict set of ancient texts and view the chaotic styles of other houses, like House Javaskript, as a sign of weakness."
  },
  { 
    id: 4, 
    name: 'House Swiftwind', 
    score: 0, 
    emoji: '🐴', 
    shieldImage: '/images/HouseSwiftwind.png',
    riderName: 'Lord Peregrine Swiftrunner',
    squireName: 'Zephyr',
    lore: "A swift and cunning house who believe in efficiency above all. They are the up-and-coming underdogs, relying on speed and precision rather than brute force. Their champion, Lord Peregrine, a relentless and focused rider, and his squire, Zephyr, an expert in battle strategy, are the up-and-coming underdogs who rely on speed and precision. They eschew heavy armor and traditions, believing that innovation is the only way to surpass the older houses." 
  }
];

function App() {
  const [gameState, setGameState] = useState('start');
  const [houses, setHouses] = useState(houseData);
  const [userChoice, setUserChoice] = useState(null);

  const handleHouseChoice = (houseName) => {
    setUserChoice(houseName);
    setGameState('challenge-1');
  };


  const chosenHouse = houses.find(house => house.name === userChoice);

  return (
    <div className="App">
      <h1 style={{ color: 'white' }}>Joust Simulator</h1>
      
      {gameState === 'start' && (
        <HouseSelector houses={houses} onSelect={handleHouseChoice} />
      )}

      {gameState !== 'start' && chosenHouse && (
        <CharacterDisplay
          riderName={chosenHouse.riderName}
          squireName={chosenHouse.squireName}
          lore={chosenHouse.lore}
          shieldImage={chosenHouse.shieldImage} 
        />
      )}
    </div>
  );
}

export default App;