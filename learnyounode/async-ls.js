var fs = require('fs')

// store args
var dir     = process.argv[2]
var pattern = process.argv[3]

// create regexp object
var re = new RegExp("\\." + pattern + "$")

fs.readdir(dir, function(err, list) {
  // iterate through list
  list.forEach(function(elem) {
    //  for each elem, check:
    //    does the elem match pattern? (use RegExp class)
    // also works: re.test(elem)
    if (elem.match(re)) {
      console.log(elem)
    }
  })
})
