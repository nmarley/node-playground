var http = require('http')
  , async = require('async')

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

async.each([process.argv.slice(2, 3)], function (item, callback) {
  getUrl(item, callback)
}, function (err) {
  if (err)
    console.log(err)
})
