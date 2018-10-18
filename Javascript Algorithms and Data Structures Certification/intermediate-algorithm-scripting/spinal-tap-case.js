// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins

    let chars = str.split('');
    for(let i = 1; i < chars.length; i++){
      if(chars[i] !== chars[i].toLowerCase() && chars[i] === chars[i].toUpperCase() && chars[i-1] !== ' ' && chars[i-1] !== '-'){
        chars.splice(i, 0, ' '); // add a space before a capital letter to separate words for strings with no whitespace
        i++;
        if(chars[i-2] === '_'){ // i-2 because a space was added above and i++ so thats 2 indices
          chars.splice(i-2, 1); // remove underscore
          i--;
        }
      }
    }
    return chars.join("").split(/\W/).join("-").toLowerCase();
  }
  
  spinalCase("The_Andy_Griffith_Show");
