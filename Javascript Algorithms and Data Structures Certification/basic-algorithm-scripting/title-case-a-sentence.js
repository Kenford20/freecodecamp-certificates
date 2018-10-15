// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
    //console.log('\''.toLowerCase());
    let titleCasedStr = '';
    let words = str.split(' ');
  
    for(let i = 0; i < words.length; i++){
      let chars = words[i].split('');
      for(let j = 0; j < chars.length; j++){
        switch(j){
          case 0: titleCasedStr += chars[j].toUpperCase();
          break;
          default: titleCasedStr += chars[j].toLowerCase();
        }
      }
      if(i < words.length-1) // prevent space as last char
        titleCasedStr += ' ';
    }
    return titleCasedStr;
  }
  
  titleCase("shORt and stoUt");