import React, { Component } from 'react';
import socketIOClient from "socket.io-client";

import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://127.0.0.1:8000');

class Client extends Component {
    constructor() {
        super();
        this.state = {
          response: false,
          endpoint: "http://127.0.0.1:4001"
        };
      }
    
      componentDidMount() {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("FromAPI", data => this.setState({ response: data }));
      }
    
      render() {
        const { response } = this.state;
        return (
            <div style={{ textAlign: "center" }}>
              {response
                  ? <p>
                    The temperature in Florence is: {response} °F
                  </p>
                  : <p>Loading...</p>}
            </div>
        );
      }
}

export default Client;