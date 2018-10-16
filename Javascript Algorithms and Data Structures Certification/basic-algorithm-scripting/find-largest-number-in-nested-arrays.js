// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
    // You can do this!
    let largestNum = 0;
    let largestNums = [];
  
    for(let i = 0; i < arr.length; i++){
      largestNum = arr[i][0]; // set largest num to the first element
      for(let j = 0; j < arr[i].length; j++){
        if(arr[i][j] > largestNum)
          largestNum = arr[i][j];
      }
      largestNums.push(largestNum);
    } 
    return largestNums;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));