// Implement a higher-order function that takes a function and calls it 'n' times.

function repeat(operation, num) {
  if (num) {
    repeat(operation, num - 1)
    operation()
  }
}

module.exports = repeat
