module.exports = function countWords(inputWords) {
  return inputWords.reduce(function(obj, curr) {
    obj[curr] = ++obj[curr] || 1
    return obj
  }, {})
}

