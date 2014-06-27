var fs = require('fs')
var level = require('level')

var lines = fs.readFileSync(process.argv[3], 'utf8').split("\n")

var db = level(process.argv[2])

db.on('ready', function (err) {
  if (err)
    throw err

  var batch = db.batch()

  lines.forEach(function (line) {
    var operation, key, value;
    var arr = line.split(',')

    operation = arr[0]
    key = arr[1]
    value = arr[2]

    if (operation == 'put') {
      batch.put(key, value)
    }
    else if (operation == 'del') {
      batch.del(key)
    }
  })

  batch.write(function(err) {
    console.error("err: " + err)
  })

})


/* Alternative method:

  var operations = data.map(function (line) {
    var d = line.split(',')
    // 'value' is ignored for del
    return { type: d[0], key: d[1], value: d[2] }
  })

  db.batch(operations, function (err) {
    if (err)
      throw err
    db.close()
  })

*/
