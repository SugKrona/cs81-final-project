// Gustavo Corona
// src/App.jsx made August 4, 2025
// GitHub Repository URL: https://github.com/SugKrona/cs81-final-project

import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import styles from './App.module.css';
import HouseSelector from './HouseSelector';
import CharacterDisplay from './CharacterDisplay';
import Scoreboard from './Scoreboard';
import ChallengeButton from './ChallengeButton';
import FinalBattleDisplay from './FinalBattleDisplay';
import RestartButton from './RestartButton';
import PreFinalBattle from './PreFinalBattle';
import LoadingBar from './LoadingBar';
import PreChallenge from './PreChallenge';

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
    riderImage: '/images/Dukejax.png',
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

// Define the three challenges with names and descriptions
const challenges = [
  {
    name: "The Great Tournament of Spears",
    description: "Knights will clash in a test of pure skill and bravery. A true test of a house's martial prowess."
  },
  {
    name: "The Tournament of the Obsidian Axe",
    description: "A brutal melee where only the strongest will survive. This challenge favors raw power and grit."
  },
  {
    name: "The Gauntlet of Valor",
    description: "A race through treacherous terrain, where speed and cunning are the keys to victory. A test of wits and agility."
  }
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

  // Create audio element references
  const mainThemeAudioRef = useRef(null);
  const loadingJingleAudioRef = useRef(null);
  const selectionSoundAudioRef = useRef(null);
  const cheersAudioRef = useRef(null);

  // Use an effect to control loading music
  useEffect(() => {
    if (gameState === 'challenge-running' || gameState === 'final-battle-running') {
      loadingJingleAudioRef.current.play();
    } else {
      loadingJingleAudioRef.current.pause();
      loadingJingleAudioRef.current.currentTime = 0; 
    }
  }, [gameState]);

  // Use an effect to play cheers when results are displayed
  useEffect(() => {
    if (gameState === 'results') {
      cheersAudioRef.current.play();
    }
  }, [gameState]);

  useEffect(() => {
    const mainThemeAudio = mainThemeAudioRef.current;
    if (mainThemeAudio) {
        mainThemeAudio.play().catch(error => {
            console.log("Autoplay was prevented. User interaction is needed.", error);
        });
        
        const handleAudioEnded = () => {
            mainThemeAudio.play();
        };

        mainThemeAudio.addEventListener('ended', handleAudioEnded);

        return () => {
            mainThemeAudio.removeEventListener('ended', handleAudioEnded);
        };
    }
  }, []);

  const playSelectionSound = () => {
    if (selectionSoundAudioRef.current) {
      selectionSoundAudioRef.current.currentTime = 0;
      selectionSoundAudioRef.current.play();
    }
  };

  const handleHouseChoice = (houseName) => {
    playSelectionSound();
    setUserChoice(houseName);
    setGameState('pre-challenge-1');
  };

  const handleStartChallenge = (challengeIndex) => {
    playSelectionSound();
    setChallengeMessage(`--- Challenge ${challengeIndex + 1}: ${challenges[challengeIndex].name} ---`);
    setGameState('challenge-running');
    setTimeout(() => {
      const updatedHouses = houses.map(house => {
        const points = Math.floor(Math.random() * 5) + 1;
        return { ...house, score: house.score + points };
      });
      setHouses(updatedHouses);
      if (challengeIndex < challenges.length - 1) {
        setGameState(`post-challenge-${challengeIndex + 1}`);
      } else {
        setGameState('post-challenge-3');
      }
    }, 3000);
  };

  const handlePreFinalBattle = () => {
    playSelectionSound();
    const sortedHouses = [...houses].sort((a, b) => b.score - a.score);
    const topTwo = sortedHouses.slice(0, 2);
    const bottomTwo = sortedHouses.slice(2, 4);
    setFinalists(topTwo);
    setEliminatedHouses(bottomTwo);
    setGameState('final-battle');
  };

  const handleFinalBattle = () => {
    playSelectionSound();
    setChallengeMessage("--- The Final Battle Begins! ---");
    setGameState('final-battle-running');
    
    setTimeout(() => {
        const battleWinnerObject = Math.random() < 0.5 ? finalists[0] : finalists[1];
        setWinner(battleWinnerObject);
        
        const finalSortedScores = [...houses].sort((a, b) => {
          if (a.name === battleWinnerObject.name) return -1;
          if (b.name === battleWinnerObject.name) return 1;
          return b.score - a.score;
        });

        setFinalScores(finalSortedScores);
        setGameState('results');
    }, 3000);
  };

  const handleRestart = () => {
    playSelectionSound();
    setGameState('start');
    setHouses(houseData);
    setUserChoice(null);
    setChallengeMessage('');
    setWinner(null);
    setFinalists([]);
    setFinalScores([]);
    setEliminatedHouses([]);
    if (cheersAudioRef.current) {
        cheersAudioRef.current.pause();
        cheersAudioRef.current.currentTime = 0;
    }
  };

  const chosenHouse = houses.find(house => house.name === userChoice);

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.glowingElement} style={{ color: 'white' }}>Joust Simulator</h1>
      <img className={styles.glowingElement} src="/images/titleknight.png" alt="Jousting Knight Title Logo" style={{ width: '150px', margin: '0 auto', display: 'block' }} />

      {gameState === 'results' && (
        <div className={styles.confettiForeground}></div>
      )}

      {gameState === 'start' && (
        <HouseSelector houses={houses} onSelect={handleHouseChoice} />
      )}

      {gameState === 'challenge-running' && (
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <p style={{ color: 'white', fontSize: '2.5rem', marginBottom: '20px', textAlign: 'center' }}>The challenge is underway!</p>
          <LoadingBar loadingGif="/images/Loading-1.gif" />
        </div>
      )}
      {gameState === 'final-battle-running' && (
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <p style={{ color: 'white', fontSize: '2.5rem', marginBottom: '20px', textAlign: 'center' }}>The ultimate clash begins!</p>
          <LoadingBar loadingGif="/images/Loading-1.gif" />
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
          <PreChallenge
            challengeName={challenges[0].name}
            challengeDescription={challenges[0].description}
            onStart={() => handleStartChallenge(0)}
          />
        </>
      )}

      {gameState === 'post-challenge-1' && (
        <>
          <p style={{ color: 'white', fontSize: '2.5rem', marginBottom: '20px', textAlign: 'center' }}>{challengeMessage}</p>
          <Scoreboard houses={houses} userChoice={userChoice} finalists={[]} />
          <PreChallenge
            challengeName={challenges[1].name}
            challengeDescription={challenges[1].description}
            onStart={() => handleStartChallenge(1)}
          />
        </>
      )}

      {gameState === 'post-challenge-2' && (
        <>
          <p style={{ color: 'white', fontSize: '2.5rem', marginBottom: '20px', textAlign: 'center' }}>{challengeMessage}</p>
          <Scoreboard houses={houses} userChoice={userChoice} finalists={[]} />
          <PreChallenge
            challengeName={challenges[2].name}
            challengeDescription={challenges[2].description}
            onStart={() => handleStartChallenge(2)}
          />
        </>
      )}

      {gameState === 'post-challenge-3' && (
        <>
          <p style={{ color: 'white', fontSize: '2.5rem', marginBottom: '20px', textAlign: 'center' }}>{challengeMessage}</p>
          <Scoreboard houses={houses} userChoice={userChoice} finalists={[]} />
          <ChallengeButton challengeName="View the Qualifiers" onStart={handlePreFinalBattle} />
        </>
      )}

      {gameState === 'final-battle' && (
        <>
          <p style={{ color: 'white', fontSize: '2.5rem', marginBottom: '20px', textAlign: 'center' }}>{challengeMessage}</p>
          <PreFinalBattle eliminatedHouses={eliminatedHouses} finalists={finalists} />
          <ChallengeButton challengeName="The Final Battle" onStart={handleFinalBattle} />
        </>
      )}
      
      {gameState === 'results' && finalists && (
        <>
          <p style={{ color: 'white', fontSize: '2.5rem', marginBottom: '20px', textAlign: 'center' }}>{challengeMessage}</p>
          <Scoreboard houses={finalScores} userChoice={userChoice} finalists={finalists} winner={winner.name} />
          <FinalBattleDisplay finalists={finalists} winner={winner} />
          <RestartButton onRestart={handleRestart} />
        </>
      )}
      
      <audio ref={mainThemeAudioRef} src="/main-theme.mp3" autoPlay className={styles.hiddenAudio} />
      <audio ref={loadingJingleAudioRef} src="/loading-jingle.mp3" loop className={styles.hiddenAudio} />
      <audio ref={selectionSoundAudioRef} src="/selection.mp3" className={styles.hiddenAudio} />
      <audio ref={cheersAudioRef} src="/cheers.mp3" className={styles.hiddenAudio} />
    </div>
  );
}

export default App;