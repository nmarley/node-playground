var http = require('http')

var url = process.argv[2]
var buffer = ""

http.get(url, function(resp) {
  resp.setEncoding('utf8')
  resp.on('data', function(data) {
    buffer += data
  })
  resp.on('end', function() {
    console.log(buffer.length)
    console.log(buffer)
  })
})
