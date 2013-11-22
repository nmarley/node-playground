// my way
function sum(nums) {
  var sum = 0;
  for (var i = 0; i < nums.length; ++i) {
    sum += Number(nums[i]);
  }
  return sum;
}

console.log(sum(process.argv.slice(2,process.argv.length)));


// their way
//
// var result = 0
// for (var i = 2; i < process.argv.length; i++)
//   result += Number(process.argv[i])
// console.log(result)

