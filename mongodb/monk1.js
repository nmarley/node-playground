var mongo = require('mongodb')
var db = require('monk')('localhost/freedom')
  , collection = db.get('articles')

collection.find({}, function(err, articles) {
  articles.forEach(function(article) {
    console.log(article._id, article.title)
  })

  db.close()
})
