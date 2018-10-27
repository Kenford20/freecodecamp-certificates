// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.

function sumPrimes(num) {
    let primeSum = 0;
  
    // produce prime numbers up to 'num'
    for(let i = 2; i <= num; i++){
      for(let divisor = 2; divisor <= i; divisor++){
        if(i != divisor && (i % divisor) === 0){ // check for third divisor (remainder is 0 after division)
          // not prime, so increment and check next number
          i++; 
          divisor=2; // reset divisor
        }
      }
      // only comes to this point if i is prime
      if(i <= num){
        primeSum += i;
      }
    }
    return primeSum;
  }
  
  sumPrimes(10);