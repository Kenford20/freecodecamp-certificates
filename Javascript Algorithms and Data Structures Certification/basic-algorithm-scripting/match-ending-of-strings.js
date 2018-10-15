// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    
    for(let i = 0; i < target.length; i++){
      if(str[str.length-(i+1)] != target[target.length-(i+1)])
        return false;
    }
    return true;
  }
  
  console.log(confirmEnding("Bastian", "ian"));