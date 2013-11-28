var http = require('http')
var moment = require('moment')
var url = require('url')

function stringifyTime(now) {
  var timeString = '{"hour": ' + now.hour() +
                  ', "minute": ' + now.minute() +
                  ', "second": ' + now.second() + '}'
  return timeString;
}

function unixifyTime(now) {
  var timeString = '{"unixtime": ' + now.valueOf() + '}';
  return timeString;
}

var server = http.createServer(function(req, resp) {
  if (req.method != 'GET') {
    resp.writeHead(405, {'Allow': 'GET'})
    resp.end('{"message": "bad method (method != GET)"}')
  }

  var hash = url.parse(req.url, true)
  var fcn = (function(now){ return null });

  switch(hash.pathname) {
    case '/api/parsetime':
      fcn = stringifyTime;
      break;
    case '/api/unixtime':
      fcn = unixifyTime;
      break;
  }

  var dateString = hash.query.iso
  var dateObj = moment(dateString)

  resp.writeHead(200, {'Content-Type': 'application/json'})
  resp.end(fcn(dateObj))
})

server.listen(8000)
