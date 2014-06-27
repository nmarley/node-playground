module.exports = function (db, date, callback) {
  var count = 0
  db.createReadStream({start: date}).on('data', function (data) {
    count += 1
  }).on('error', function(err) {
    callback(err)
  }).on('end', function () {
    callback(null, count)
  })
}
