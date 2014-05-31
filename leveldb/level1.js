var levelup = require('levelup');

// open a data store
levelup('/tmp/dprk.db', function (err, db) {
  db.get('name', function(err, value) {
    console.log("value = " + value);
  })
})
