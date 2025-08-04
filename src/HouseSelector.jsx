// Gustavo Corona
// src/HouseSelector.jsx made August 4, 2025
// GitHub Repository URL: https://github.com/SugKrona/cs81-final-project

import React from 'react';
import HouseCard from './HouseCard';

// Defines a component to display all houses for the user to choose.
// It receives the list of houses (data) and a function to handle the choice (onSelect) as props.
function HouseSelector({ houses, onSelect }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ color: 'white', marginBottom: '20px' }}>Choose Your House</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {houses.map(house => (
          <HouseCard
            key={house.id}
            name={house.name}
            shieldImage={house.shieldImage}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default HouseSelector;