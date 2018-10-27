// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
  let biggerNum = Math.max(arr[0], arr[1]);
  let smallerNum = Math.min(arr[0], arr[1]);
  console.log(`bigger: ${biggerNum} smaller: ${smallerNum}`);

  let factor = 1;
  for(let i = smallerNum; i < biggerNum; i++){
    if((biggerNum * factor % i) !== 0){
      // multiple is not evenly divisible, so increment factor and try next multiple
      factor++;
      i = smallerNum-1; // reset i to check if multiple is indeed divisible by all numbers in the range
    }
  }
  // only exits loop when all numbers in the range have successfully divided the multiple (factor * biggerNum)
  console.log(factor)
  console.log(biggerNum * factor)
  return biggerNum * factor;
}
smallestCommons([23,18]);