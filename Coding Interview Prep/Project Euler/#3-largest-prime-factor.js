// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the given number?

function largestPrimeFactor(number) {
    // Good luck!
      let biggestPrimeFactor = 0;
    
      // produce prime numbers up to 'number'
      for(let i = 2; i <= number; i++){
        for(let divisor = 2; divisor <= i; divisor++){
          if(i != divisor && (i % divisor) === 0){ // check for third divisor (remainder is 0 after division)
            // not prime, so increment and check next number
            i++; 
            divisor=2; // reset divisor
          }
        }
        // only comes to this point if i is prime
        if(number%i === 0){
          biggestPrimeFactor = i;
          number = number/i;
          console.log(biggestPrimeFactor);
        }
      }
    return biggestPrimeFactor;
  }
  
  console.log(largestPrimeFactor(600851475143)); 
// largestPrimeFactor(2) should return 2.
// largestPrimeFactor(3) should return 3.
// largestPrimeFactor(5) should return 5.
// largestPrimeFactor(7) should return 7.
// largestPrimeFactor(13195) should return 29.
// largestPrimeFactor(600851475143) should return 6857. // doesnt work for this case :c (overflow issues or something?)