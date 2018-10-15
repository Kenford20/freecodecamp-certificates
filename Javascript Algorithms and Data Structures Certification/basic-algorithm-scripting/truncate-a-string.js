// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
    // Clear out that junk in your trunk
    if(num >= str.length)
      return str;
    else{
        let chars = str.split('');
        chars.splice(num, chars.length, '...');
        let truncatedStr = chars.join('');
      return truncatedStr;
    }
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 10));