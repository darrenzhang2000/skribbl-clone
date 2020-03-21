import React from 'react'
import Status from './Status'
import Ranking from './Ranking'

const gamePlayStyle = {
    border: '2px solid #fc0373',
    width: '600px',
    margin: 'auto'   
}

const GamePlay = props => <div style={gamePlayStyle}>
    <h1>Game Play Page</h1>
    <Status/>
    <Ranking/>
    <h1>Canvas</h1>
    <h1>Chat</h1>
</div>

export default GamePlay
