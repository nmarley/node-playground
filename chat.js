server = require('http').createServer();
server.listen(8080);

var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket){

    // when message received, send it to all connected clients
    socket.on('message', function(message){
        console.log("Received message: " + message +
                    " - from client " + socket.id);
        io.sockets.emit('chat', socket.id, message);
    });
});
