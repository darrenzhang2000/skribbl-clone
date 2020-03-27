import React from 'react';
import './App.css';
import Home from './components/home/Home'
import GamePlay from './components/gamePlay/GamePlay';
import Client from './components/websocket/client';

function App() {
  return (
    <div className="App">
      <Home/>
      <br/>
      <GamePlay/>
      <Client/>
    </div>
  );
}

export default App;
