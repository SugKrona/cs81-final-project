// Gustavo Corona
// src/LoadingBar.jsx made August 5, 2025
// GitHub Repository URL: https://github.com/SugKrona/cs81-final-project

import React from 'react';

function LoadingBar({ loadingGif }) {
  const loadingBarStyle = {
    textAlign: 'center',
    margin: '20px auto',
  };

  const imageStyle = {
    width: '150px',
    height: 'auto',
  };

  return (
    <div style={loadingBarStyle}>
      <img src={loadingGif} alt="Knights Fighting Animation" style={imageStyle} />
      <p style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}>The challenge is underway!</p>
    </div>
  );
}

export default LoadingBar;