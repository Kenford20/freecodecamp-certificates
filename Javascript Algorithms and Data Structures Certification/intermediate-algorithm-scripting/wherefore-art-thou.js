// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    let numPropsMatched = 0;
  
    // Only change code below this line
    for(let i = 0; i < collection.length; i++){
      for(let prop in source){
        if(source[prop] === collection[i][prop]){
            numPropsMatched++;
        }
      }
      if(numPropsMatched === Object.keys(source).length){
          arr.push(collection[i]);
      }
      numPropsMatched = 0;
    }
    return arr;
  }
  
  whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})