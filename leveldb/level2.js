var levelup = require('levelup');

var db = levelup('/tmp/dprk.db', { valueEncoding: 'json'} );

db.put('dprk', {
    name: 'Kim Jong Un',
    spouse: 'Ri Sol-Ju',
    dob: '8 January 1983',
    occupation: 'clown'
  },
  function(err) {
    db.get('dprk', function(err, value) {
      console.log('dprk:', value);
      db.close();
    })
  }
)
