// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function addTogether(...args) {
  // two arguments initially
  if(args.length === 2){
      if(typeof args[0] !== "number" || typeof args[1] !== "number"){
        return undefined
      }
      return args[0] + args[1]; // sum the two arguments if theyre numbers
  }
  // one argument initially
  else if(typeof args[0] !== "number"){
      return undefined
  }
  // currying function for second argument
  return function(arg2){ 
      if(typeof arg2 !== "number"){
        return undefined
      }
      return args[0] + arg2 // sum first and second arguments if theyre numbers
  }
}

console.log(addTogether(2)([3]));

