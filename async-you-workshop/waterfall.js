var fs = require('fs')
var http = require('http')

fs.readFile(process.argv[2], 'utf8', function(err, data) {
  if (err)
    throw err
  var url = data.replace(/^\s+|\s+$/g, '')

  var buff = []
  http.get(url, function(resp) {
    resp.on('data', function(chunk) {
      buff.push(chunk)
    }).on('error', function(err) {
      console.error(err)
      throw err
    }).on('end', function() {
      console.log(buff.join(''))
    })
  })
})
