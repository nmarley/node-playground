var fs = require('fs')

function splitBufferAndLog(buffer) {
  var newlines = new Array
  var j = 0
  for (var index = 0; index < buffer.length; ++index) {
    if (buffer[index] == "\n".charCodeAt(0)) { // 0x0a, or 10
      console.log(buffer.slice(j, index))
      index++
      j = index
    }
  }
  console.log(buffer.slice(j, index))
}

var file = process.argv[2];

fs.readFile(process.argv[2], function(err, data) {
  if (err)
    throw err
  splitBufferAndLog(data)
})
