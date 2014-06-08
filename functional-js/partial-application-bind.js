var slice = Array.prototype.slice

module.exports = function(namespace) {
  return console.log.bind(undefined, namespace)
}
