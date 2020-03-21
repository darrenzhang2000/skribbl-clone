import React from 'react'

let rankingStyle = {
    border: '2px solid #f0a818',
    width: '200px',
    margin: 'auto'
}

const Ranking = props => <div style={rankingStyle}>
    <h1>Rankings</h1>
    <ol>
        <li>User 1: 1000 points</li>
        <li>User 2: 900 points</li>
        <li>User 3: 800 points</li>
        <li>User 4: 700 points</li>
        <li>User 5: 600 points</li>
    </ol>
</div>

export default Ranking