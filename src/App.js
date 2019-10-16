import React from 'react';
import './App.css';
import DisplayWordCloud from './DisplayWordCloud';
import SentimentalAnalysis from './SentimentAnalysis';

function App() {
  return (
    <div className="App">
      <DisplayWordCloud />
      <SentimentalAnalysis />
    </div>
  );
}

export default App;
