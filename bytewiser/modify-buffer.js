process.stdin.on('data', function(buff) {
  for (var i = 0; i < buff.length; ++i) {
    if (buff[i] == 0x2e) buff.write('!', i)
  }
  console.log(buff);
})
