var http = require('http')

// store urls
var urls = process.argv.slice(2,5)

var hash = new Object;
var count_ended = 0;

function end() {
  urls.forEach(function(url) {
    console.log(hash[url])
  })
}

urls.forEach(function(url) {
  hash[url] = "";
  http.get(url, function(resp) {
    resp.setEncoding('utf8')
    resp.on('data', function(data) {
      hash[url] += data;
    })
    resp.on('end', function() {
      count_ended += 1;
      if (count_ended == urls.length)
        end()
    })
  })
})
