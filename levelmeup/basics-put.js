var level = require('level')
var db = level(process.argv[2])
var obj = JSON.parse(process.argv[3])

for (var propertyName in obj)  {
  db.put(propertyName, obj[propertyName], function(err) {
    if (err)
      console.error('Error in put(): ', err)
    console.error('put foo = bar')
  })
}
