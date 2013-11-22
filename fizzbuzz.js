
function getOutputValue(num) {
  var val = '';

  if ((num % 3) == 0) { val += "Fizz" }
  if ((num % 5) == 0) { val += "Buzz" }
  if (val === '') { val = num }

  return val;
}

for (var i = 1; i <= 100; ++i) {
  console.log(getOutputValue(i));
}
