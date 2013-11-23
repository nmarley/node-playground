var ls = require('./ls-module')

var dir     = process.argv[2]
var pattern = process.argv[3]

ls(dir, pattern, function(err, data) {
  data.forEach(function(elem) {
    console.log(elem)
  })
})
