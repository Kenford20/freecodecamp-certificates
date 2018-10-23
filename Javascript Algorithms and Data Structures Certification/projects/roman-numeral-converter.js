// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
    let romanValues = [1000, 'M', 900, 'CM', 500, 'D', 400, 'CD', 100, 'C', 90, 'XC', 50, 'L', 40, 'XL', 10, 'X', 9, 'IX', 5, 'V', 4, 'IV', 1, 'I'];
    let romanNumeral = '';

    for(let i = 0; i < romanValues.length; i += 2){
        while(num >= romanValues[i]){
            romanNumeral += romanValues[i+1]; // concatenate the appropriate roman symbol from the array of values
            num -= romanValues[i]; // subtract the value of the decimal matched to the corresponding symbol
        }
    }
 return romanNumeral;
}

console.log(convertToRoman(1234));