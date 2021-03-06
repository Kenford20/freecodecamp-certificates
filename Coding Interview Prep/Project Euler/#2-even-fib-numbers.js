// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed nth term, find the sum of the even-valued terms.

function fiboEvenSum(n) {
    // You can do it!
    let prevNum = 1;
    let currentNum = 1;
    let nextNum = 0;
    let evenSum = 0;
  
    for(let i = 0; i <= n; i++){
      if(nextNum %2 === 0)
        evenSum += nextNum
      nextNum = prevNum + currentNum;
      prevNum = currentNum;
      currentNum = nextNum;
    }
    return evenSum;
  }
  
  fiboEvenSum(10);