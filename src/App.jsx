// Gustavo Corona
// src/App.jsx made August 2, 2025
// GitHub Repository URL: https://github.com/SugKrona/cs81-final-project

import React, { useState, useEffect } from 'react';
import './index.css';
import HouseSelector from './HouseSelector';
import CharacterDisplay from './CharacterDisplay';
import Scoreboard from './Scoreboard';
import ChallengeButton from './ChallengeButton';
import FinalBattleDisplay from './FinalBattleDisplay';
import RestartButton from './RestartButton';

// Define the data for the four houses with detailed lore and character names
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

// Define the three challenges
const challenges = [
  "The Great Tournament of Spears",
  "The Tournament of the Obsidian Axe",
  "The Gauntlet of Valor"
];

function App() {
  const [gameState, setGameState] = useState('start');
  const [houses, setHouses] = useState(houseData);
  const [userChoice, setUserChoice] = useState(null);
  const [challengeMessage, setChallengeMessage] = useState('');
  const [winner, setWinner] = useState(null);
  const [finalists, setFinalists] = useState([]);
  const [finalScores, setFinalScores] = useState([]); // NEW: Store final sorted scores

  // NEW: Function to reset the game state and start over
  const handleRestart = () => {
    setGameState('start');
    setHouses(houseData); // Reset house scores
    setUserChoice(null);
    setChallengeMessage('');
    setWinner(null);
    setFinalists([]);
    setFinalScores([]);
  };

  // This function handles the user's initial choice of house.
  const handleHouseChoice = (houseName) => {
    setUserChoice(houseName);
    setGameState('pre-challenge-1');
  };

  // This function is triggered by a button click to run a challenge.
  const handleStartChallenge = (challengeIndex) => {
    setChallengeMessage(`--- Challenge ${challengeIndex + 1}: ${challenges[challengeIndex]} ---`);
    const updatedHouses = houses.map(house => {
      const points = Math.floor(Math.random() * 5) + 1;
      return { ...house, score: house.score + points };
    });
    setHouses(updatedHouses);
    // Move to the next challenge state
    if (challengeIndex < 2) {
      setGameState(`pre-challenge-${challengeIndex + 2}`);
    } else {
      setGameState('final-battle');
    }
  };

  // This function is triggered to run the final battle.
  const handleFinalBattle = () => {
    setChallengeMessage("--- The Final Battle Begins! ---");
    // Sort houses by score to find the top two
    const sortedHouses = [...houses].sort((a, b) => b.score - a.score);
    const topTwo = sortedHouses.slice(0, 2);
    setFinalists(topTwo);
    setFinalScores(sortedHouses); // Store the full sorted list

    // Randomly select a winner from the top two
    const battleWinner = Math.random() < 0.5 ? topTwo[0].name : topTwo[1].name;
    setWinner(battleWinner);
    setGameState('results');
  };

  const chosenHouse = houses.find(house => house.name === userChoice);

  return (
    <div className="App">
      <h1 style={{ color: 'white' }}>Joust Simulator</h1>
      
      {gameState === 'start' && (
        <HouseSelector houses={houses} onSelect={handleHouseChoice} />
      )}

      {gameState === 'pre-challenge-1' && chosenHouse && (
        <>
          <CharacterDisplay
            riderName={chosenHouse.riderName}
            squireName={chosenHouse.squireName}
            lore={chosenHouse.lore}
            shieldImage={chosenHouse.shieldImage}
          />
          <ChallengeButton challengeName={challenges[0]} onStart={() => handleStartChallenge(0)} />
        </>
      )}

      {/* Challenge 1 Display */}
      {gameState === 'pre-challenge-2' && (
        <>
          <p style={{ color: 'white', fontSize: '1.5rem', marginBottom: '20px' }}>{challengeMessage}</p>
          <Scoreboard houses={houses} userChoice={userChoice} finalists={[]} />
          <ChallengeButton challengeName={challenges[1]} onStart={() => handleStartChallenge(1)} />
        </>
      )}

      {/* Challenge 2 Display */}
      {gameState === 'pre-challenge-3' && (
        <>
          <p style={{ color: 'white', fontSize: '1.5rem', marginBottom: '20px' }}>{challengeMessage}</p>
          <Scoreboard houses={houses} userChoice={userChoice} finalists={[]} />
          <ChallengeButton challengeName={challenges[2]} onStart={() => handleStartChallenge(2)} />
        </>
      )}

      {/* Challenge 3 Display & Final Battle Button */}
      {gameState === 'final-battle' && (
        <>
          <p style={{ color: 'white', fontSize: '1.5rem', marginBottom: '20px' }}>{challengeMessage}</p>
          <Scoreboard houses={houses} userChoice={userChoice} finalists={[]} />
          <ChallengeButton challengeName="The Final Battle" onStart={handleFinalBattle} />
        </>
      )}

      {/* Final Results Display */}
      {gameState === 'results' && finalists && (
        <>
          <p style={{ color: 'white', fontSize: '1.5rem', marginBottom: '20px' }}>{challengeMessage}</p>
          <Scoreboard houses={finalScores} userChoice={userChoice} finalists={finalists} winner={winner} /> {/* UPDATED: pass finalScores */}
          <FinalBattleDisplay finalists={finalists} winner={winner} />
          <RestartButton onRestart={handleRestart} />
        </>
      )}
    </div>
  );
}

export default App;