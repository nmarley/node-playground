var level = require('level')
var db = level(process.argv[2])

var count;

get = function(key) {
  return db.get(key, (function(key) {
    return function(err, value) {
      if (err) {
        if (!err.notFound) {
          throw err
        }
      }
      else {
        return console.log(key + '=' + value)
      }
    };
  })(key))
}

for (count = 0; count <= 100; count++) {
  get('key' + count);
}


// official solution (recursive)
//
// function fetchNext (i) {
//   var key = 'key' + i
//   db.get(key, function (err, data) {
//     if (err) {
//       if (!err.notFound)
//         throw err
//     } else
//       console.log(key + '=' + data)
//
//     if (i < 100)
//       fetchNext(i + 1)
//   })
// }
//
// fetchNext(0)

