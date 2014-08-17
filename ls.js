// example of using an EventEmitter instead of callbacks to implement async
// operations

var fs = require('fs')
var events = require('events')

var pumpfiles = function () {
  var ee = new events.EventEmitter()
  fs.readdir('/tmp', function (err, files) {
    if (err)
      ee.emit('error', err)
    else {
      files.forEach(function (file) {
        ee.emit('data', file)
      })
    }
    ee.emit('end')
  })

  return ee
}

pumpfiles().on('error', function (err) {
  throw(err)
}).on('data', function (filename) {
  console.log("filename: " + filename)
}).on('end', function () {
  console.log("all done!")
})



