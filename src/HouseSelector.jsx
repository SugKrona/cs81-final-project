// Gustavo Corona
// src/HouseSelector.jsx made August 4, 2025
// GitHub Repository URL: https://github.com/SugKrona/cs81-final-project

import React from 'react';
import HouseCard from './HouseCard';

function HouseSelector({ houses, onSelect, playSelectionSound }) { 
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ color: 'white', marginBottom: '20px' }}>Choose Your House</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {houses.map(house => (
          <HouseCard
            key={house.id}
            name={house.name}
            shieldImage={house.shieldImage}
            onSelect={(name) => {
              playSelectionSound();
              onSelect(name);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default HouseSelector;