import React from 'react'
import Status from './Status'
import Ranking from './Ranking'
import Canvas from './Canvas'
import Chat from './Chat'
import DrawArea from './drawing/DrawArea'

const gamePlayStyle = {
    border: '2px solid #fc0373',
    width: '600px',
    margin: 'auto'   
}

const GamePlay = props => <div style={gamePlayStyle}>
    <h1>Game Play Page</h1>
    <Status/>
    <Ranking/>
    <Canvas/>
    <Chat/>
</div>

export default GamePlay
