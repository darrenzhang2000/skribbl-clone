import React from "react"

let instructionStyle = {
    border: '2px solid #03b1fc',
    width: '200px',
    margin: 'auto'
}


const Instruction = props => (
    <div style={instructionStyle}>
        <h1>Instructions</h1>
        <ol>
            <li>Step 1</li>
            <li>Step 2</li>
            <li>Step 3</li>
        </ol>
    </div>
)

export default Instruction
