module.exports.init = function (db, words, callback) {
  var batch = db.batch()

  words.forEach(function (word) {
    var key = word.length + '!' + word
    batch.put(key, word)
  })

  batch.write(function (err) {
    if (err)
      callback(err)
    else
      callback(null)
  })
}


module.exports.query = function (db, word, callback) {
  var start = word.length + '!' + word.replace(/\*/g, '')
  var end   = word.length + '!' + word.replace(/\*/g, '~')

  var results = []
  var options = { start: start,
                  end: end,
                  keys: false,
                  values: true }

  db.createReadStream(options).on('data', function (word) {
    results.push(word)
  }).on('error', function(err) {
    if (err)
      callback(err)
  }).on('end', function() {
    callback(null, results)
  })
}
