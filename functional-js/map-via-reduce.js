// Use Array#reduce to implement a simple version of Array#map.

module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(accum, elem) {
    return accum.concat(fn(elem))
  }, [])
}
