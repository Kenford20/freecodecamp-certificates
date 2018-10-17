// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.

function destroyer(arr, ...args) {
    // Remove all the values
    for(let i = 0; i < args.length; i++){
      for(let j = 0; j < arr.length; j++){
        if(args[i] === arr[j]){
          arr.splice(j, 1);
          j--;
        }
      }
    }
    console.log(arr);
    return arr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2,3);