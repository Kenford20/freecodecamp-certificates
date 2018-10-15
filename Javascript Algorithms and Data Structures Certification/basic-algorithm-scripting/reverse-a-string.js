// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

function reverseString(str) {
    let temp = '';
    for(let i = 0; i < str.length; i++){
      temp += str[str.length-(i+1)];
    }
    str = temp;
    console.log(str);
    return str;
  }
  
  reverseString("hello");