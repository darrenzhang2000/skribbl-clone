import React from "react"
import './Chat.css'

// let chatStyle = {
//     border: '2px solid #1505f5',
//     width: '200px',
//     margin: 'auto'
// }

const Chat = props => (
    <div id="chat">
        <div id="chat-window">
            <div id="output"></div>
            <div id="feedback"></div>
        </div>
        <input id="handle" type="text" placeholder="Handle" />
        <input id="message" type="text" placeholder="Message" />
        <button id="send">Send</button>
    </div>
)

export default Chat