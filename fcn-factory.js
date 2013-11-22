// function makeAddFunction(amount) {
//   function add(number) {
//     return number + amount;
//   }
//   return add;
// }
function makeAddFunction(amount) {
  return function (number) {
    return number + amount;
  };
}

var addTwo = makeAddFunction(2);
var addFive = makeAddFunction(5);

console.log(addTwo(1) + addFive(1));

