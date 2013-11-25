var net = require('net')

function zeroPad(num) {
  return (num < 10) ? ("0" + num) : num;
}

var server = net.createServer(function(socket) {
  var now = new Date();

  var data = now.getFullYear() + "-" +
            zeroPad(now.getMonth() + 1) + "-" +
            zeroPad(now.getDate()) + " " +
            zeroPad(now.getHours()) + ":" + zeroPad(now.getMinutes())

  socket.write(data)
  socket.end()
})

server.listen(8000)
