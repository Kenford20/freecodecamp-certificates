// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements(arr, func) {
    // Drop them elements.
    for(let i = 0; i < arr.length; i++){
      if(!func(arr[i])){
        arr.splice(i,1);
        i--;
      }
      else if(func(arr[i])){
        return arr;
      }
    }
    return arr; // arr is empty at this point
  }
  
  console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));