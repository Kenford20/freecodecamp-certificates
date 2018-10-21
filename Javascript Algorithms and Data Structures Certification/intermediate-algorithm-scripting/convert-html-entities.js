// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    // &colon;&rpar;
  
    function returnHTMLentity(char){
      switch(char){
        case "&": return "&amp;"; break;
        case "<": return "&lt;"; break;
        case ">": return "&gt;"; break;
        case "\"": return "&quot;"; break;
        case "'": return "&apos;"; break;
        default: return "";
      }
    }
  
    let chars = str.split('');
    
    for(let i = 0; i < chars.length; i++){
      if(/[&<>'"]/.test(chars[i])){
        chars[i] = returnHTMLentity(chars[i]);
      }
    }
    return chars.join('');
  }
  
  console.log(convertHTML("Hamburgers < Pizza > Tacos"));