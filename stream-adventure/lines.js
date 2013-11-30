var through = require('through');
var split   = require('split');

var count = 0;
var tr = through(function (buf) {
  var line = buf.toString();
  count += 1
  this.queue(((count % 2) == 0)
    ? line.toUpperCase() + '\n'
    : line.toLowerCase() + '\n'
    )
})

process.stdin
  .pipe(split())
  .pipe(tr)
  .pipe(process.stdout)
;
