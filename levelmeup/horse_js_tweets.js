module.exports = function (db, date, callback) {
  var tweets = new Array()
  db.createReadStream({start: date, end: date + "\xff"}).on('data', function (data) {
    tweets.push(data.value)
  }).on('error', function(err) {
    callback(err)
  }).on('end', function () {
    callback(null, tweets)
  })
}
