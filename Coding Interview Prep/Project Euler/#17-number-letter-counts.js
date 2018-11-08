// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to given limit inclusive were written out in words, how many letters would be used?

// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

function numberLetterCounts(limit) {
    // Good luck!
      let ones = ['one','two','three','four','five','six','seven','eight','nine'];
      let teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
      let tens = ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
      let placeValues = [1000,100,10,1];
    
      // if >= 100, hundred and = 10 chars always
      // if >= 10, 1-9 appears every multiple of ten (36 chars) 
      let placeValueCounter = 0;
      let placeValue = '';
      let letterCount = 0;
  
      for(let i = 1; i < limit; i++){
        let testedNumInRange = i;
        for(let j = 0; j < 4; j++){ // placevalues arr
        while(testedNumInRange >= placeValues[j]){
              if(testedNumInRange >= 10 && testedNumInRange <= 19){
                  placeValue = 'teens';
              }
              else if(testedNumInRange >= 1000){
                placeValue = 'thousand';
              }
              else if(testNumInRange >= 100){
                placeValue = 'hundred';
              }
              
              placeValueCounter++;
              testedNumInRange -= placeValues[j];
          }
          if(placeValueCounter !== 0){
              console.log(ones[placeValueCounter-1].length);
              
          }
          placeValueCounter = 0;
        }
  
      }
  
    return true;
  }
  
  numberLetterCounts(5);