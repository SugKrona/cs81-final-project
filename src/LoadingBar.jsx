// Gustavo Corona
// src/LoadingBar.jsx made August 4, 2025
// GitHub Repository URL: https://github.com/SugKrona/cs81-final-project

import React from 'react';

function LoadingBar() {
  const loadingBarStyle = {
    width: '80%',
    height: '20px',
    backgroundColor: '#333',
    border: '2px solid white',
    borderRadius: '10px',
    overflow: 'hidden',
    margin: '20px auto',
  };

  const progressStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: '#007bff',
    animation: 'load 3s linear forwards',
  };

  return (
    <div style={loadingBarStyle}>
      <div style={progressStyle}></div>
    </div>
  );
}

export default LoadingBar;