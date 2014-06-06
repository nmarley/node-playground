function duckCount() {
  return Array.prototype.slice.call(arguments, 0).reduce(function(accum, obj) {
    return accum + (Object.prototype.hasOwnProperty.call(obj, 'quack') ? 1 : 0)
  }, 0)
}

module.exports = duckCount


// official solution
/*
function duckCount() {
  return Array.prototype.slice.call(arguments).filter(function(obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack')
  }).length
}

module.exports = duckCount
*/
