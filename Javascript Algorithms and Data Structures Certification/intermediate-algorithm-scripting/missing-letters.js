// Find the missing letter in the passed letter range and return it.

// fearNotLetter("abce") should return "d".
// fearNotLetter("abcdefghjklmno") should return "i".
// fearNotLetter("stvwx") should return "u".
// fearNotLetter("bcdf") should return "e".
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.

//  If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    console.log("a".charCodeAt())
    console.log(String.fromCharCode(97))
  
    for(let i = 0; i < str.length; i++){
      if(i === str.length - 1) // if the end of string is reached, all letters in the range are present
        return undefined
      if(str[i+1].charCodeAt() !== str[i].charCodeAt()+1)
        return String.fromCharCode(str[i].charCodeAt()+1)
    }
  }
  
  fearNotLetter("abcdef");