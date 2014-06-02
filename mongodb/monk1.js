var db = require('monk')('localhost/test')
  , articles = db.get('articles')

console.log(articles.id())

// articles.find({}, function(err, docs) {
//   if (err)
//     console.log("err: " + err)
//   else
//     console.log("Found " + docs.count() + " docs")
// })


db.close()
