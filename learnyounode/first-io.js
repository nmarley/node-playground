var fs = require('fs')
var fn = process.argv[2]

var buffer = fs.readFileSync(fn)
var data   = buffer.toString()
var arr    = data.split("\n")

console.log(arr.length - 1)
