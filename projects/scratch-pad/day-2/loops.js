// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE // //function with one paramenter
  for (var i = 0; i < array.length; i++) { //creating loop to print values of array to console.
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) { //function with one parameter.
  // YOUR CODE BELOW HERE //
  for (var i = array.length - 1; i >=0; i--) { //creating loop the decriments by 1 to print the array in reverse.
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
 function getObjectKeys(object) { //function with one parameter - object
  // YOUR CODE BELOW HERE //
  var array = [];
  for (var key in object) {
    array.push(key); //using push to add all keys of object to array.
  }
  return array;
  
  // YOUR CODE ABOVE HERE //
}


/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) { //function with one parameter.
  // YOUR CODE BELOW HERE //
  for (var key in object) { //looping through object keys
    console.log(key); //printing keys to console.
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  var array = [];
  for (var key in object) {
    array.push(object[key]); //using push to add all key values of object to array.
  }
  return array;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  var array = [];
  for (var key in object) { //using loop to loop through all keys in object.
    console.log(object[key]); //logging all key values to the console.
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
 function getObjectLength(object) { //function with one parameter object.
  // YOUR CODE BELOW HERE //
  var array = [];
  for (var key in object) { //looping through keys in object.
    array.push([key]);
  }
   return array.length; //returning number of key/value pairs.
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
 function printObjectValuesInReverse(object) { //function with one object as a parameter. 
  // YOUR CODE BELOW HERE //
  var value = Object.values(object); //creating variable that is equal to object values. 
    for (var i = value.length - 1; i >= 0; i--) { //creating loop to loop through object values in reverse.
     console.log(value[i]); //printing values to console in reverse.
  }

  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
