// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
for (var i = 1; i <= 100; i++) //creating for loop to print numbers 1 through 100.
if (i % 3 === 0 && i % 5 === 0) { //creating conditional for i being divisible by both 3 and 5.
  console.log("FizzBuzz"); //results in FizzBuzz being printed. 
}
  else if (i % 3 === 0) { //conditional if i is divisible by 3.
    console.log("Fizz"); //results in Fizz being printed.
  }
  else if (i % 5 === 0) { //conditional if i is divisible by 5.
    console.log("Buzz"); //results in Buzz being printed.
  }
  else { //if neither condition is met, the i at it's current itteration is printed.
    console.log(i);
  }
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}