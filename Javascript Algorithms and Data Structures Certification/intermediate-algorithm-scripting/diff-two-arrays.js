// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Note
// You can return the array with its elements in any order.

// My first immediate solution

// function diffArray(arr1, arr2) {
//     var newArr = [];
//     let matched = false;
//     // Same, same; but different.
//     // check arr1 against elements in arr2
//     for(let i = 0; i < arr1.length; i++){
//       for(let j = 0; j < arr2.length; j++){
//         if(arr1[i] === arr2[j]){
//           matched = true;
//         }
//       }
//       if(matched === false)
//         newArr.push(arr1[i]);
//       matched = false;
//     }
  
//     // check arr2 against elements in arr1
//     for(let i = 0; i < arr2.length; i++){
//       for(let j = 0; j < arr1.length; j++){
//         if(arr2[i] === arr1[j]){
//           matched = true;
//         }
//       }
//       if(matched === false)
//         newArr.push(arr2[i]);
//       matched = false;
//     }
//     console.log(newArr);

    // my second solution attempt after being dissatisfied with the amount of structures used above
    function diffArray(arr1, arr2) {
        var newArr = [];
        // Same, same; but different.
        newArr = [...arr1, ...arr2].sort();
      
        for(let i = 0; i< newArr.length; i++){
          if(newArr[i] === newArr[i+1]){
            newArr.splice(i, 2);
            i -= 2;
          }
        }
        return newArr;
      }
      
      diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);