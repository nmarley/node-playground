var http = require('http')
  , async = require('async')

var body = ''
var count = 0

async.whilst(
  function () {
    return ( body.indexOf('meerkat') === -1 )
  },
  function (callback) {
    http.get(process.argv[2], function (resp) {
      var buff = []
      resp.on('data', function (chunk) {
        buff.push(chunk)
      }).on('end', function () {
        count += 1
        body = buff.join('')
        callback(null)
      }).on('error', function (err) {
        if (err)
          callback(err)
      })
    })
  },
  function (err) {
    if (err)
      console.error(err)
    console.log(count)
  }
)
