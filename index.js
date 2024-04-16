const http = require('http')
const express = require('express')


const app = express()
const path = require('path');
const { Socket } = require('dgram');
const server = http.createServer(app);


const { Server } = require("socket.io");
const io = new Server(server)

app.use(express.static(path.resolve("./public")));

//socket.io
io.on('connection', (socket) =>{
    console.log("A new user has connected", socket.id)
})



app.get('/', (req,res) =>{
    return res.sendFile("/public/index.html")
})



server.listen(9000, () =>{
    console.log(`server started PORT: 9000`);
})