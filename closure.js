var variable = "top-level";

function parent() {
  var variable = "local";
  function child() {
    console.log(variable);
  }
  return child;
}

var child = parent();
child();
