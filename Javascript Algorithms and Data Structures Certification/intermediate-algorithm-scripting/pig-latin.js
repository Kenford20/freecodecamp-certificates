// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
    if(str[0] === "a" || str[0] === "e" || str[0] === "i" || str[0] === "o" || str[0] === "u")
      return str + "way"
    
    //if(!str.includes("a") && !str.includes("e") && !str.includes("i") && !str.includes("o") && !str.includes("u"))
    //  return str + "ay";
  
     let consonantClusterLength = 1;
     let clusterLetters = '';
     for(let i = 1; i < str.length; i++){
       if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u")
         break;
       else
         consonantClusterLength++;
     }
    clusterLetters = str.slice(0, consonantClusterLength);
    return str.slice(consonantClusterLength) + clusterLetters + "ay";
  
  }
  
  console.log(translatePigLatin("throw"));