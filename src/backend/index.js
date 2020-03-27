const express = require("express")
const http = require("http")
const socketIo = require("socket.io")
const axios = require("axios")

const port = process.env.PORT || 4001
const index = require("../routes/index")

const app = express()
app.use(index)

const server = http.createServer(app)

const io = socketIo(server) // < Interesting!

io.on("connection", socket => {
    console.log("socket connected", socket.id)

    socket.on("chat", data => {
        console.log("prickly pear")
        io.sockets.emit("chat", data)
    })
})

server.listen(port, () => console.log(`Listening on port ${port}`))
