/*
Create a function that sums two arguments together. If only one argument is provided,
then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined.
*/

function addTogether() {
  var args = Array.from(arguments);
  
  // no number given as first arguments
  if(typeof(args[0]) !== 'number'){
      return undefined;
  }
  
  // in case of 2 arguments
  else if(args.length == 2){
    //no number given as the second
    if(typeof(args[1]) !== 'number'){
      return undefined;
    }
    return args[0] + args[1];
  }
  // one arguments
  return function(b){
    if(typeof(b) !== 'number'){
      return undefined;
    }
    return args[0] + b;
  };
}

addTogether(2,3);
