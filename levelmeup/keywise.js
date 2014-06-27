var level = require('level')
var db = level(process.argv[2], { valueEncoding: 'json'})

var data = require(process.argv[3])

data.forEach(function(obj) {
  var key = (obj.type == 'user') ? obj.name : obj.user + '!' + obj.name
  db.put(key, obj)
})

