var http = require('http')
var async = require('async')

var getUrl = function (url, callback) {
  var buff = []
  http.get(url, function (resp) {
    resp.on('data', function (chunk) {
      buff.push(chunk)
    }).on('error', function (err) {
      callback(err)
    }).on('end', function () {
      callback(null, buff.join(''))
    })
  }).on('error', function (err) {
    if (err)
      callback(err)
  })
}

async.series({
  requestOne: function (callback) {
    getUrl(process.argv[2], callback)
  },
  requestTwo: function (callback) {
    getUrl(process.argv[3], callback)
  }
}, function (err, results) {
  if (err)
    console.error(err)
  else
    console.log(results)
})
