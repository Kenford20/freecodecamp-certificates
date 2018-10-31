// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the nth prime number?

function nthPrime(n) {
    // Good luck!
    let primeNumCount = 0;
    let nthPrimeNum = 0;
  
    for(let i = 2; primeNumCount < n; i++){
      for(let divisor = 2; divisor <= i; divisor++){
        if(i != divisor && (i % divisor) === 0){ // check for third divisor (remainder is 0 after division)
          // not prime, so increment and check next number
          i++; 
          divisor=2; // reset divisor
        }
      }
      // only comes to this point if i is prime
      //console.log(i)
      primeNumCount++;
      nthPrimeNum = i;
      //console.log("prime count: " + primeNumCount)
    }
    return nthPrimeNum;
  }
  
  console.log(nthPrime(1000));
  
// nthPrime(6) should return 13.
// nthPrime(10) should return 29.
// nthPrime(100) should return 541.
// nthPrime(1000) should return 7919. // solution is too inefficient for these cases :c
// nthPrime(10001) should return 104743. // solution is too inefficient for these cases :c