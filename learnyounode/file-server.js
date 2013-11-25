var fs = require('fs')
var http = require('http')

var file_to_serve = process.argv[2]

var server = http.createServer(function(req, resp) {
  var src = fs.createReadStream(file_to_serve)
  src.pipe(resp)
})

server.listen(8000)
