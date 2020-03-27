import React, { Component } from "react"
import "./Chat.css"
import socketIOClient from "socket.io-client";

/*
    onClickHandler - emit message of type 'chat' to backend
    backend listens - can be js, no need to change anything

    onKeyPressHandler - emit message of type 'keypress'

    question: how to have sockets constantly listen? 
*/

class Chat extends Component {
    constructor() {
        super();
        this.state = {
          response: false,
          endpoint: "http://127.0.0.1:4001",
          message: ""
        };
        this.textInput = React.createRef()
      }
    componentDidMount = () => {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        
    }

    sendButtonHandler = () => {
        console.log('pomegranate')
        // this.state.socket.emit('chat', {
        //     handle: handle.value,
        //     message: message.value
        // })
    }
    
    messageChangeHandler = e =>{
        this.setState({message: e.target.value})
        console.log(this.state.message)
    }
    render() {
        return (
            <div id="chat">
                <div id="chat-window">
                    <div id="output"></div>
                    <div id="feedback"></div>
                </div>
                <input id="handle" type="text" placeholder="Handle" />
                <input id="message" type="text" placeholder="Message" onChange={this.messageChangeHandler} value={this.state.message}/>
                <button id="send" onClick={this.sendButtonHandler}>Send</button>
            </div>
        )
    }
}

export default Chat
