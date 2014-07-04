var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost/test');
// var db = monk('localhost:27017/test');

var collection = db.get('users');
collection.find({}, function(err, docs) {
  if (err)
    throw err

  docs.forEach(function(doc) {
    console.log(doc._id, doc.name, doc.languages)
  })

  db.close()
})

