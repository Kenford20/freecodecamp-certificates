// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two n-digit numbers.

function largestPalindromeProduct(n) {
    // Good luck!
  
    let factor1 = "";
    let factor2 = "";
  
    // create two largest factors based on the number of digits 'n' (type is string to be dynamically created based on 'n')
    for(let i = 0; i < n; i++){
      factor1 += "9";
      factor2 += "9";
    }
  
    //console.log(typeof (factor1 - 1))
    let largestPalindrome = 0;
    let numIterations = 0;
  
    // start at 999*999, 999*998, ... until a palindrome is created
    // then decrement factor1 and start whole process over again (998*999, 998*998, 998*997, ...)
    // runs 'n' times to ensure largest palindrome is return
    for(let i = factor1; i > 0; i--){
      while(i * factor2 != (i*factor2).toString().split('').reverse().join('')){ // while product is not palindrome
        factor2--;
        numIterations++;
      }
      if((i*factor2) > largestPalindrome)
        largestPalindrome = i*factor2;
      factor2 += numIterations; // reset factor2
      numIterations = 0;
    }
    //console.log((2*3).toString())
    //console.log(123.toString().split('').reverse().join(''))
  
    return largestPalindrome;
  }
  
  console.log(largestPalindromeProduct(3));