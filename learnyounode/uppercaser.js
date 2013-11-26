var http = require('http')

var server = http.createServer(function(req, resp) {
  if (req.method == 'POST') {
    req.setEncoding('utf8')
    req.on('data', function(body) {
      resp.write(body.toUpperCase())
    })
    req.on('end', function() {
      resp.end()
    })
  }
})

server.listen(8000)
