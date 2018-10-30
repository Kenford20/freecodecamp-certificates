// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3and5(number) {
    // Good luck!
    let sumMultiples3and5 = 0;
  
    for(let i = 3; i < number; i++){
      if(i%3 === 0 || i%5 === 0)
        sumMultiples3and5 += i;
    }
    console.log(sumMultiples3and5)
    return sumMultiples3and5;
  }
  
  multiplesOf3and5(49);