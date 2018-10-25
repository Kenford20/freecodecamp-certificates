// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {  
    // initial fib values
    let fibSum = 2;
    let prevNum = 1;
    let currentNum = 1;
    let result = 0;
  
    while(num >= result){
      if(result % 2 === 1){ fibSum += result; } // sum the result if its odd

      // produce fib sequence
      result = prevNum + currentNum;
      prevNum = currentNum;
      currentNum = result;
    }
    return fibSum;
  }
  
  console.log(sumFibs(75025));
  