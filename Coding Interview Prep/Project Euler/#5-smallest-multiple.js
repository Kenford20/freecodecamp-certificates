// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

function smallestMult(n) {
    // Good luck!
  
    let factor = 1;
    for(let i = 1; i < n; i++){
      if((n * factor % i) !== 0){
        // multiple is not evenly divisible, so increment factor and try next multiple
        factor++;
        i = 1; // reset i to check if multiple is indeed divisible by all numbers in the range
      }
    }
  
    return n*factor;
  }
  
  smallestMult(20); 

// smallestMult(5) should return 60.
// smallestMult(7) should return 420.
// smallestMult(10) should return 2520.
// smallestMult(13) should return 360360.
// smallestMult(20) should return 232792560. // solution is too inefficient for these cases :c