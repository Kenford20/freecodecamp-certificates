// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

// The lowest number will not always come first.

function sumAll(arr) {
    let sum = 0;
    let firstNum;
    let lastNum;

    if(arr[0] < arr[1]){
      firstNum = arr[0];
      lastNum = arr[1];
    } else {
      firstNum = arr[1];
      lastNum = arr[0];
    }
  
    for(let i = firstNum; i <= lastNum; i++){
      sum += i;
    }
  
    return sum;
  }
  
  console.log(sumAll([1, 4]));