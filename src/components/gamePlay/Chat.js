import React, { Component } from "react"
import "./Chat.css"
import socketIOClient from "socket.io-client"

/*
    onClickHandler - emit message of type 'chat' to backend
    backend listens - can be js, no need to change anything

    onKeyPressHandler - emit message of type 'keypress'

    question: how to have sockets constantly listen? 
*/

class Chat extends Component {
    constructor() {
        super()
        this.state = {
            response: false,
            message: "",
            handle: "",
            output: "",
            chatMessages: []
        }
        this.outputRef = React.createRef()
        this.socket = socketIOClient("http://127.0.0.1:4001")

        this.socket.on("chat", data => {
            console.log("asd")
            this.setState({ chatMessages: [...this.state.chatMessages, data] })
            console.log('message: ', this.state.chatMessages)
        })

        // this.socket.on('typing', (data)=>{
        //     console.log('raspberries')
        //     feedback.innerHTML = '<p><em>' + data.handle + ' is typing ...' + '</em></p>'
        // })
    }

    sendButtonHandler = () => {
        console.log("pomegranate")
        this.socket.emit("chat", {
            handle: this.state.handle,
            message: this.state.message
        })
    }

    messageChangeHandler = e => {
        this.setState({ message: e.target.value })
    }

    handleChangeHandler = e => {
        this.setState({ handle: e.target.value })
    }
    render() {
        return (
            <div id="chat">
                <div id="chat-window">
                    <div id="output" ref={this.outputRef}>
                        {this.state.chatMessages.map(msg => (
                            <p>
                                <strong>{msg.handle}</strong>: {msg.message}
                            </p>
                        ))}
                    </div>
                    <div id="feedback"></div>
                </div>
                <input
                    id="handle"
                    type="text"
                    placeholder="Handle"
                    onChange={this.handleChangeHandler}
                    value={this.state.handle}
                />
                <input
                    id="message"
                    type="text"
                    placeholder="Message"
                    onChange={this.messageChangeHandler}
                    value={this.state.message}
                />
                <button id="send" onClick={this.sendButtonHandler}>
                    Send
                </button>
            </div>
        )
    }
}

export default Chat
