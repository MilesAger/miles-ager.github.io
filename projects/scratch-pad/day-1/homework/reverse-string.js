// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

 function reverseString(input) { //creating a function that has one input string value as a parameter.
  var results = ''; //creating a variable to collect output I will return
    // YOUR CODE GOES BELOW HERE //
    for (var i = input.length - 1; i >= 0; i--) { //creating for-loop that loops through the input decending from input.length - 1.
      results += input[i]; //setting results to the decending looped string input. 
    }
  return results;  //returns the input string backwards. 
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}