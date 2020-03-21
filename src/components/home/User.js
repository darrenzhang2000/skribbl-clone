import React from 'react'


let style = {
    border: '2px solid green',
    width: '200px',
    margin: 'auto'
}

const User = (props) => <div style={style}>
    <h3>User Card</h3>
    <input type='text' placeholder='username'/>
    <p>Image</p>
</div>

export default User