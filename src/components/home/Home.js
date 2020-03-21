import React from "react"
import User from './User'
import Instruction from './Instruction'

let homeStyle = {
    border: '2px solid #ce03fc',
    width: '600px',
    margin: 'auto'   
}

const Home = props => (
    <div style={homeStyle}>
        <h1>Title</h1>
        <Instruction/>
        <User/>
        <button>Play</button>
    </div>
)

export default Home