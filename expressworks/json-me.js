var express = require('express')
var fs = require('fs')
var app = express()

var data = fs.readFileSync(process.argv[3])

app.get('/books', function (req, res) {
  var object = JSON.parse(data)
  res.json(object)
})

app.listen(process.argv[2])
