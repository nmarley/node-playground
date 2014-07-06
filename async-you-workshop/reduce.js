var http = require('http')
  , async = require('async')

async.reduce(['one', 'two', 'three'], 0, function (memo, item, callback) {
  var buff = []
  var url = process.argv[2] + '?number=' + item

  http.get(url, function (resp) {
    resp.on('data', function (chunk) {
      buff.push(chunk)
    }).on('end', function () {
      var value = parseInt(buff.join(''))
      callback(null, memo + value)
    }).on('error', function (err) {
      if (err)
        callback(err)
    })
  }).on('error', function (err) {
    if (err)
      callback(err)
  })
}, function (err, result) {
  if (err)
    console.error(err)
  console.log(result)
})
