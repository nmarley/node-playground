// module declaration
var mongo = require('mongodb')
var express = require('express')
var monk = require('monk')

// database and express application instantiation
var db = monk('localhost:27017/test')
var app = new express()

// tell express app to load server and static files (if any) from public folder
app.use(express.static(__dirname + '/public'))

// setup routes
app.get('/', function(req, res) {
  db.driver.admin.listDatabases(function(e, dbs) {
    res.json(dbs)
  })
})

app.get('/collections', function(req, res) {
  db.driver.collectionNames(function(e, names) {
    res.json(names)
  })
})

app.get('/collections/:name', function(req, res) {
  var collection = db.get(req.params.name)
  collection.find({}, {limit: 20}, function(e, docs) {
    res.json(docs)
  })
})

app.listen(3000)
