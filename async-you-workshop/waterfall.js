var fs = require('fs')
var http = require('http')
var async = require('async')

async.waterfall([
  function(callback) {
    fs.readFile(process.argv[2], 'utf8', function(err, data) {
      if (err)
        return callback(err)
      callback(null, data)
    })
  },

  function(data, callback) {
    var buff = []
    var url = data.replace(/^\s+|\s+$/g, '')
    http.get(url, function (resp) {
      resp.on('data', function (chunk) {
        buff.push(chunk)
      }).on('error', function (err) {
        callback(err)
      }).on('end', function() {
        console.log(buff.join(''))
      })
    }).on('error', function (err) {
      callback(err)
    })
  }],

  function (err, result) {
    if (err)
      console.error(err)
    else
      console.log(result)
  }

)
