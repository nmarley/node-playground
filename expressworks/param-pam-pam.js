var express = require('express')
var app = express()

var crypto = require('crypto')

var sha1_hexdigest = function (id) {
  return crypto
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
}

app.put('/message/:id', function(req, res) {
  res.send(sha1_hexdigest(req.params.id))
})

app.listen(process.argv[2])
