function greaterThan(orig) {
  return function(testNumber) {
    return testNumber > orig;
  };
}

var f1 = greaterThan(2);
console.log("f1(3) = " + f1(3));
console.log("f1(1) = " + f1(1));


var greaterThanTen = greaterThan(10);
console.log(greaterThanTen(9));
