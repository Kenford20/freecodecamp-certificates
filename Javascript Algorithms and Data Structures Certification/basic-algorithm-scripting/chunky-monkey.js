// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    // Break it up.
    let nestedArray = [];
    let index = 0;
  
    for(let i = 0; i < Math.ceil(arr.length/size); i++){
      nestedArray.push(arr.slice(index, size+index));
      console.log(arr.slice(index, size+index));
      index += size;
    }
    return nestedArray;
  }
  
  console.log("new arr: " + chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));