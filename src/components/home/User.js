import React from 'react'

let userStyle = {
    border: '2px solid green',
    width: '200px',
    margin: 'auto'
}

const User = (props) => <div style={userStyle}>
    <h3>User Card</h3>
    <input type='text' placeholder='username'/>
    <p>Image</p>
</div>

export default User