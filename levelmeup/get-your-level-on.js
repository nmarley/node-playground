var level = require('level')
var db = level(process.argv[2])

db.get('levelmeup', function(err, value) {
  console.log(value)
})

