var levelup = require('levelup');

// open a data store
var db = levelup('/tmp/dprk.db');

// a simple Put operation
db.put('name', 'Ben S Bernanke', function(err) {

  // a Batch operation made up of 3 puts
  db.batch([
    { type: 'put', key: 'successor', value: 'Janet Yellen' },
    { type: 'put', key: 'dob', value: '13 December 1953' },
    { type: 'put', key: 'occupation', value: 'printing press operator' }
  ], function(err) {

    // read the whole store as a stream and print each entry to stdout
    db.createReadStream()
      .on('data', console.log)
      .on('close', function() {
        db.close()
      })
  })
})


