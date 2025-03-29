const express = require('express');
const app = express();
const { createServer } = require('http');
const { join } = require('path');
const { Server } = require('socket.io');
const port = process.env.PORT || 3000;

const expressServer = createServer(app);

const io = new Server(expressServer);

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, "index.html"))
})


expressServer.listen(port, () => {
    console.log(`Server Open in ${port}`)
})

