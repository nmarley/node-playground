var http = require('http')
var moment = require('moment')
var url = require('url')

function stringifyTime(time) {
  return {
    hour: time.hour(),
    minute: time.minute(),
    second: time.second()
  }
}

function unixifyTime(time) {
  return { unixtime: time.valueOf() }
}

var server = http.createServer(function(req, resp) {
  if (req.method != 'GET') {
    resp.writeHead(405, {'Allow': 'GET'})
    resp.end(JSON.stringify({message: 'bad method (method != GET)'}))
  }

  var parsed = url.parse(req.url, true)
  var result = null
  var date   = moment(parsed.query.iso)

  switch(parsed.pathname) {
    case '/api/parsetime':
      result = stringifyTime(date)
      break;
    case '/api/unixtime':
      result = unixifyTime(date)
      break;
  }

  resp.writeHead(200, {'Content-Type': 'application/json'})
  resp.end(JSON.stringify(result))
})

server.listen(8000)
