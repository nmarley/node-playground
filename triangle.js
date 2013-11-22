
function stringOfHashes(num, max) {
  var str = '';
  for (var count = 1; count <= num; count++) { str += '#' }

  var padding = calcPadding(num, max);
  var spaces = xspaces(padding);
  return spaces + str;
}

function calcPadding(num, max) {
  max -= num;
  if (max <= 0) { return 0 }
  var extra = (max % 2);
  var padding = Math.floor(max / 2);
  return padding + extra;
}

function xspaces(num) {
  var str = '';
  for (var count = 1; count <= num; count++) { str += ' '}
  return str;
}

var max = 50;
for (var i = 1; i < max; ++i) {
  console.log(stringOfHashes(i, max));
}
