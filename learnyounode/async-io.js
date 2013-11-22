var fs = require('fs')
var fn = process.argv[2]

fs.readFile(fn, 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data.split('\n').length - 1)
})
