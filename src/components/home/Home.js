import React from "react"
import User from './User'

let homeStyle = {
    border: '2px solid #ce03fc',
    width: '600px',
    margin: 'auto'   
}

let instructionStyle = {
    border: '2px solid #03b1fc',
    width: '200px',
    margin: 'auto'
}

const Home = props => (
    <div style={homeStyle}>
        <h1>Title</h1>
        <div style={instructionStyle}>
            <h3>Instructions</h3>
            <ol>
                <li>Step 1</li>
                <li>Step 2</li>
                <li>Step 3</li>
            </ol>
        </div>
        <User/>
        <button>Play</button>
    </div>
)

export default Home