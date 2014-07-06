var http = require('http')
  , async = require('async')

var opts = {
  hostname: process.argv[2],
  port: process.argv[3],
  headers: {}
}

var makeRequest = function (opts, callback) {
  var buff = []
  var req = http.request(opts, function (resp) {
    resp.on('data', function (chunk) {
      buff.push(chunk)
    }).on('end', function () {
      console.log(buff.join(''))
    }).on('error', function (err) {
      callback(err)
    })
  }).on('error', function (err) {
    callback(err)
  })
  return req
}

var postUser = function (user_id, callback) {
  opts.method = 'POST'
  opts.path = '/users/create'
  var params = JSON.stringify({
    user_id: user_id
  })
  opts.headers['Content-Length'] = params.length

  var buff = []
  var req = http.request(opts, function (resp) {
    resp.on('data', function (chunk) {
      buff.push(chunk)
    }).on('end', function () {
      callback(null, buff.join(''))
    }).on('error', function (err) {
      callback(err)
    })
  }).on('error', function (err) {
    callback(err)
  })

  req.write(params)
  req.end()
}

var getUsers = function (callback) {
  opts.path = '/users'
  opts.method = 'GET'
  delete opts.headers['Content-Length']

  var req = makeRequest(opts, callback)
  req.end()
}

async.series({
  post: function (callback) {
    async.times(5, function (n, next) {
      postUser(n+1, function (err) {
        next(err)
      })
    })
    callback(null)
  },
  get: function (callback) {
    getUsers(callback)
  }
},
function (err, results) {
  if (err)
    console.error(err)
  console.log(results)
})

