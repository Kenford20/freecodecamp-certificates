//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
    // repeat after me
    let repeatedStr = '';
  
    if(num > 0){
      for(let i = 0; i < num; i++){
        repeatedStr += str;
      }
    }
    return repeatedStr;
  }
  
  repeatStringNumTimes("abc", 3);