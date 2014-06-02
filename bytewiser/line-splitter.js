
//   #####################################################################
//   ##                      ~~  Line Splitter  ~~                      ##
//   #####################################################################
var fs = require('fs')

function splitBufferAndLog(buffer) {
  var newlines = new Array
  var j = 0
  for (var index = 0; index < buffer.length; ++index) {
    if (buffer[index] == "\n".charCodeAt(0)) { // 0x0a, or 10
      console.log(buffer.slice(j, index))
      index++
      j = index
    }
  }
  console.log(buffer.slice(j, index))
}


var file = process.argv[2];
// console.log("file = " + file)

fs.readFile(process.argv[2], function(err, data) {
  if (err)
    throw err
  splitBufferAndLog(data)
  // console.log(data)
})

// The argument given to you from `process.argv[2]` will be a path to a file.

// Read this file and split it by newline characters ('\n'). You should log
// one Buffer per line.

// Bonus points if you never use `.toString()`.

// When you have completed your program, you can run it in the test
// environment with:

//   bytewiser run program.js

// And once you are happy that it is correct then run:

//   bytewiser verify program.js

// And your submission will be verified for correctness. After you have
// a correct solution, run `bytewiser` again and select the next problem!

// ----------------------------------------------------------------------
// HINTS:

// Buffers have a `.slice` method that can be used to grab a sub-selection as a view (no memcpy).

// Extra bonus points if you avoid using fs.readFileSync.

// Read more about Buffers here:
//   http://nodejs.org/api/all.html#all_buffer
// Or off-line on your local filesystem:
//   /usr/local/lib/node_modules/bytewiser/docs/node-api-docs.html#all_buffer


