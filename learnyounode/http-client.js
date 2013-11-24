http = require('http')

// save off args
url = process.argv[2]

http.get(url, function(resp){
  // resp.statusCode
  resp.setEncoding('utf8')
  resp.on('data', function(data) {
    console.log(data)
  })
})
