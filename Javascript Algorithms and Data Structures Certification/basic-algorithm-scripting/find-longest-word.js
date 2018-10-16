// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
  let words = str.split(' ');
  let longestWord = '';

  for(let j = 0; j < words.length; j++){
    if(words[j].length > longestWord.length)
      longestWord = words[j];
  }
  return longestWord.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazyyyyyyyyyyyy doggooooooo"));