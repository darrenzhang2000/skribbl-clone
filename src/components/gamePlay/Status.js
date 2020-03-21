import React from 'react'
let statusStyle = {
    border: '2px solid #ecf013',
    width: '200px',
    margin: 'auto'
}

const Status = props => <div style={statusStyle}>
    <p>Round: 1</p>
    <p>Time remaining: 30 secs</p>
    <p>Word: _ _ _ _ _ _ _</p>
</div>

export default Status

