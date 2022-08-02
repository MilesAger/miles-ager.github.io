// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) { //string is the only parameter
    // YOUR CODE BELOW HERE //
    return string.length; //creating function that takes the input of a string and returns the length of that string.


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) { //creating function only input is string
    // YOUR CODE BELOW HERE //
    return string.toLowerCase(); //function will take in a string and convert string to lowercase using method .toLowerCase and then returns the value


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) { //creating function with only one parameter of a string.
    // YOUR CODE BELOW HERE //
    return string.toUpperCase(); // function takes a string as input and outputs that same string with all the letters in upper case.


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) { //creating function with one parameter of a string.
    // YOUR CODE BELOW HERE //
    var results = ""; //creating variable results to hold output.
    results = string.toLowerCase().replaceAll(" ", "-"); // setting results to the value of the string with all spaces (' ') changed to dashes (-) 
    return results;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
 function beginsWith(string, char) { //function with two parameters.
    // YOUR CODE BELOW HERE //
   string = string.toLowerCase(); //making sure all values in string and char are lower case so they can be compared regardless of case.
    char = char.toLowerCase();
if (string[0] == char) { //creating if/else that tests whether the first character of the string is equal the the char parameter value. 
  return true; //returns true if furst letter of string is equal to char.
}
  else { //returns false if char does not match the first letter of the string.
    return false;
  }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) { //creating function that checks if last letter of string is equal to char
    // YOUR CODE BELOW HERE //
    string = string.toLowerCase(); //making sure all values in string and char are lower case so they can be compared regardless of case.
    char = char.toLowerCase();
if (string[string.length - 1] == char) { //creating if/else that tests whether the first character of the string is equal the the char parameter value. 
  return true; //returns true if furst letter of string is equal to char.
}
  else { //returns false if char does not match the first letter of the string.
    return false;


    // YOUR CODE ABOVE HERE //
}
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) { //function with 2 parameters
    // YOUR CODE BELOW HERE //
    return stringOne + stringTwo; //returning stringOne and stringTwo concatenated


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) { //function has two parameters.
    // YOUR CODE BELOW HERE //
    Array = stringOne + stringTwo; //creating Array variable and setting it to equal the two string parameters of the function.
    var args = Array.from(arguments);


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) { //creating function with two strings as parameters. 
    // YOUR CODE BELOW HERE //
    if (stringOne.length > stringTwo.length) { //creating conditional if/ else if/ else. If the length of stringOne is a large number than stringTwo, stringOne will be returned. 
        return stringOne;
    }
    else if (stringOne.length < stringTwo.length) { //creating conditional else if If the length of stringOne is a smaller number than stringTwo, stringTwo will be returned.
        return stringTwo;
    }
    else { //adding else -- if neither condition is met it will return 'Same length, or not valid'
        return 'Same length, or not valid';
    }
}


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
 function sortAscending(stringOne, stringTwo) { //creating function with two strings a parameter.
    // YOUR CODE BELOW HERE //
    var stringBoth = [stringOne, stringTwo]; //creating placeholder for both strings in array.
    var stringBoth2 = [stringTwo, stringOne];
if (stringBoth2.sort() == stringBoth && stringBoth.sort() == stringBoth) { //if stringOne is first alphabetically this conditional is true.
    return 1; //returns value of 1
}
else if (stringBoth.sort() == stringBoth2 && stringBoth2.sort() == stringBoth2) { //if stringOTwo is first alphabetically this conditional is true.
    return -1; //returns value of -1
}
else if (stringBoth.sort() == stringBoth && stringBoth2.sort() == stringBoth2) {
    return 0;  //if both variables with strings reversed have no change when sort is used it will return value of 0.
}


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
 function sortDescending(stringOne, stringTwo) { //creating function with two strings a parameter.
    // YOUR CODE BELOW HERE //
    let stringBoth = [stringOne, stringTwo]; //creating placeholder for both strings in array.
    let stringBoth2 = [stringTwo, stringOne];
if  (stringBoth.sort() == stringTwo, stringOne && stringOne !== stringTwo) { //if stringTwo is first alphabetically this conditional is True.
    return 1; //returns value of 1
}
else if (stringBoth2.sort() == stringOne, stringTwo && stringOne !== stringTwo) { //if stringOne is first alphabetically this conditional is True.
    return -1; //returns value of -1
}
else if (stringBoth.sort() == stringBoth && stringBoth2.sort() == stringBoth2) {
    return 0;  //if both variables with strings reversed have no change when sort is used it will return value of 0.
}


    // YOUR CODE ABOVE HERE //
}



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
