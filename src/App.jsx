// Gustavo Corona
// src/App.jsx made August 4, 2025
// GitHub Repository URL: https://github.com/SugKrona/cs81-final-project

import React, { useState } from 'react';
import './index.css';
import HouseSelector from './HouseSelector';
import CharacterDisplay from './CharacterDisplay';
import Scoreboard from './Scoreboard';
import ChallengeButton from './ChallengeButton';
import FinalBattleDisplay from './FinalBattleDisplay';
import RestartButton from './RestartButton';
import PreFinalBattle from './PreFinalBattle';
import LoadingBar from './LoadingBar'; 

const houseData = [
  {
    id: 1,
    name: 'House Monty Python',
    score: 0,
    emoji: '🐍',
    shieldImage: '/images/HousePython.png',
    riderName: 'Sir Lancelot of Python',
    squireName: 'Patsy',
    riderImage: '/images/SirLancelot.png',
    squireImage: '/images/Patsy.png',
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
    riderImage: '/images/DukeJax.png',
    squireImage: '/images/Byte.png',
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
    riderImage: '/images/LadyRuby.png',
    squireImage: '/images/Gem.png',
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
    riderImage: '/images/LordPeregrine.png',
    squireImage: '/images/Zephyr.png',
    lore: "A swift and cunning house who believe in efficiency above all. They are the up-and-coming underdogs, relying on speed and precision rather than brute force. Their champion, Lord Peregrine, a relentless and focused rider, and his squire, Zephyr, an expert in battle strategy, are the up-and-coming underdogs who rely on speed and precision. They eschew heavy armor and traditions, believing that innovation is the only way to surpass the older houses."
  }
];

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
  const [finalScores, setFinalScores] = useState([]);
  const [eliminatedHouses, setEliminatedHouses] = useState([]);

  const handleHouseChoice = (houseName) => {
    setUserChoice(houseName);
    setGameState('pre-challenge-1');
  };

  const handleStartChallenge = (challengeIndex) => {
    setChallengeMessage(`--- Challenge ${challengeIndex + 1}: ${challenges[challengeIndex]} ---`);
    setGameState('challenge-running'); 
    setTimeout(() => {
      const updatedHouses = houses.map(house => {
        const points = Math.floor(Math.random() * 5) + 1;
        return { ...house, score: house.score + points };
      });
      setHouses(updatedHouses);
      if (challengeIndex < 2) {
        setGameState(`post-challenge-${challengeIndex + 1}`); 
      } else {
        setGameState('pre-final-battle');
      }
    }, 3000); 
  };

  const handleFinalBattle = () => {
    setChallengeMessage("--- The Final Battle Begins! ---");
    const sortedHouses = [...houses].sort((a, b) => b.score - a.score);
    const topTwo = sortedHouses.slice(0, 2);
    setFinalists(topTwo);
    setFinalScores(sortedHouses); 

    const battleWinner = Math.random() < 0.5 ? topTwo[0].name : topTwo[1].name;
    setWinner(battleWinner);
    setGameState('results');
  };

  const handlePreFinalBattle = () => {
    const sortedHouses = [...houses].sort((a, b) => b.score - a.score);
    const topTwo = sortedHouses.slice(0, 2);
    const bottomTwo = sortedHouses.slice(2, 4);
    setFinalists(topTwo);
    setEliminatedHouses(bottomTwo);
    setGameState('final-battle');
  };

  const handleRestart = () => {
    setGameState('start');
    setHouses(houseData);
    setUserChoice(null);
    setChallengeMessage('');
    setWinner(null);
    setFinalists([]);
    setFinalScores([]);
    setEliminatedHouses([]);
  };

  const chosenHouse = houses.find(house => house.name === userChoice);

  return (
    <div className="App">
      <h1 style={{ color: 'white' }}>Joust Simulator</h1>

      {gameState === 'start' && (
        <HouseSelector houses={houses} onSelect={handleHouseChoice} />
      )}

      {gameState === 'challenge-running' && (
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <p style={{ color: 'white', fontSize: '1.5rem', marginBottom: '20px' }}>The challenge is underway!</p>
          <LoadingBar />
        </div>
      )}

      {gameState === 'pre-challenge-1' && chosenHouse && (
        <>
          <CharacterDisplay
            riderName={chosenHouse.riderName}
            squireName={chosenHouse.squireName}
            lore={chosenHouse.lore}
            shieldImage={chosenHouse.shieldImage}
            riderImage={chosenHouse.riderImage}
            squireImage={chosenHouse.squireImage}
          />
          <ChallengeButton challengeName={challenges[0]} onStart={() => handleStartChallenge(0)} />
        </>
      )}

      {gameState === 'post-challenge-1' && (
        <>
          <p style={{ color: 'white', fontSize: '1.5rem', marginBottom: '20px' }}>{challengeMessage}</p>
          <Scoreboard houses={houses} userChoice={userChoice} finalists={[]} />
          <ChallengeButton challengeName={challenges[1]} onStart={() => handleStartChallenge(1)} />
        </>
      )}

  
      {gameState === 'post-challenge-2' && (
        <>
          <p style={{ color: 'white', fontSize: '1.5rem', marginBottom: '20px' }}>{challengeMessage}</p>
          <Scoreboard houses={houses} userChoice={userChoice} finalists={[]} />
          <ChallengeButton challengeName={challenges[2]} onStart={() => handleStartChallenge(2)} />
        </>
      )}

      {gameState === 'pre-final-battle' && (
        <>
          <p style={{ color: 'white', fontSize: '1.5rem', marginBottom: '20px' }}>The challenges are complete! It's time to see the finalists...</p>
          <Scoreboard houses={houses} userChoice={userChoice} finalists={[]} />
          <PreFinalBattle eliminatedHouses={eliminatedHouses} finalists={finalists} />
          <ChallengeButton challengeName="Start Final Battle" onStart={handleFinalBattle} />
        </>
      )}

      {gameState === 'results' && finalists && (
        <>
          <p style={{ color: 'white', fontSize: '1.5rem', marginBottom: '20px' }}>{challengeMessage}</p>
          <Scoreboard houses={finalScores} userChoice={userChoice} finalists={finalists} winner={winner} />
          <FinalBattleDisplay finalists={finalists} winner={winner} />
          <RestartButton onRestart={handleRestart} />
        </>
      )}
    </div>
  );
}

export default App;