// Fill in the object constructor with the following methods below:

// getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
// Run the tests to see the expected output for each method.

// The methods that take an argument must accept only one argument and it has to be a string.

// These methods must be the only available means of interacting with the object.

var Person = function(name) {
    // Complete the method below and implement the others similarly
    let firstAndLast = name.split(" ");
    
    // getters
    this.getFullName = function() {
      return firstAndLast.join(' ');
    };
    this.getFirstName = () => {
      return firstAndLast[0];
    };
    this.getLastName = () => {
      return firstAndLast[1];
    };
    // setters
    this.setFirstName = (firstname) => {
      firstAndLast[0] = firstname;
    };
    this.setLastName = (lastname) => {
      firstAndLast[1] = lastname;
    }
    this.setFullName = (fullname) => {
      firstAndLast = fullname.split(' ');
    }
  };
  
  var bob = new Person('Bob Ross');