const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const socketIO = require('socket.io');
const io = socketIO(http);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket => {
    console.log('Nuevo User');

    socket.on('dataLog', data => {
        console.log(data);
    });

    socket.on('msg', jakinPuto => {
        console.log(jakinPuto);

        io.emit('msg', jakinPuto);

    });

});




http.listen(3000, () => {
    console.log('Servidor funcionando en el puerto 3000');
});