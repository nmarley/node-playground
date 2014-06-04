// For this challenge, read the first buffer from process.stdin, copy all bytes into a
// Uint8Array and then log out a JSON stringified representation of the typed array.

var uint8View;

process.stdin.on('readable', function() {
  uint8View = uint8View || new Uint8Array(process.stdin.read())
})

process.stdin.on('end', function() {
  console.log(JSON.stringify(uint8View))
})
