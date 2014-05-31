var levelup = require('levelup');

var db = levelup('/tmp/dprk.db', { valueEncoding: 'json'} );

function variance(db, prefix, callback) {
  var n = 0, m2 = 0, mean = 0;

  db.createReadStream({
    start: prefix, // jump to the first key with the prefix
    end: prefix + '\xFF' // stop at the last key with the prefix
  })
  .on('data', function(data) {
    var delta = data.value - mean;
    mean += delta / ++n;
    m2 = m2 + delta * delta;
  })
  .on('error', callback)
  .on('close', function() {
    callback(null, m2 / (n - 1))
  })
}
