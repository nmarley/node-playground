
module.exports = function(dir, pattern, callback) {
  var fs = require('fs')
  fs.readdir(dir, function(err, list) {
    if (err) {
      return callback(err)
    }
    var re = new RegExp("\\." + pattern + "$")
    var filtered = []
    list.forEach(function(elem) {
      // also works: re.test(elem)
      if (elem.match(re)) {
        filtered.push(elem)
      }
    })
    return callback(null, filtered)
  })
}
