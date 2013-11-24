var http = require('http')

// save off args
var url = process.argv[2]

http.get(url, function(resp){
  // resp.statusCode
  resp.setEncoding('utf8')
  resp.on('data', function(data) {
    console.log(data)
  })
})

// official solution
//
// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// })
