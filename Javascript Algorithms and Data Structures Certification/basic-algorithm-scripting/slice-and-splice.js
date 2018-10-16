// You are given two arrays and an index.

// Use the array methods slice and splice to copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let splicedArr2 = arr2.slice(); // cant modify original inputs
    let splicedPart = splicedArr2.splice(n);
    console.log(splicedPart);
  
    return [...splicedArr2, ...arr1, ...splicedPart];
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);