console.log("script is working");

var splinter = function(a,b){
  var z = a*b;
  var arraySplinter = [a, b, z];
  return arraySplinter;
};

console.log(splinter(1,2));
