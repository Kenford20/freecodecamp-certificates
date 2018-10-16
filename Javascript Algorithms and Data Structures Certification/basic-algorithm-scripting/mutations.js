// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
    // let regex = new RegExp("["+arr[1]+"]", "ig");
    // console.log(arr[0].match(regex));
    // console.log(regex.test(arr[0]))
    // return arr[0].match(regex).length === arr[1].length;
    // attempted solution above doesnt handle words with repeated letters :(
    
    let matched = false;
    let firstString = arr[0].toLowerCase();
    let secondString = arr[1].toLowerCase();
  
    for(let i = 0; i < secondString.length; i++){
      for(let j = 0; j < firstString.length; j++){
        if(firstString[j] === secondString[i])
          matched = true;
      }
      if(matched === false)
        return false;
      matched = false;
    }
      return true;
  }
  
  console.log(mutation(["Mary", "yram"]));