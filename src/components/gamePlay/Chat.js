import React from "react"
import './Chat.css'

/*
    onClickHandler - emit message of type 'chat' to backend
    backend listens - can be js, no need to change anything

    onKeyPressHandler - emit message of type 'keypress'

    question: how to have sockets constantly listen? 
*/


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