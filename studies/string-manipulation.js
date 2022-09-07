// String-manipulation
// 0. strings are primitive values that can be accessed using the index number for each character in the string,  much like an array. example below
var string = 'hey';
var part = string[0];
console.log(part); // this will result in h printing to console.
// 1. string operators are the ( + ) - concatenate string operator, and ( += ) - concatenate assignment string operator. examples below.
var a = 'Hi' + ' Jim ';
var b = 'Bob';
a += b;
console.log(a); // this will log 'Hi Jim Bob' to the console.
// string operators can only add a string to a string. whether the string you are adding is added in the front or back is based on which side the operator is on. 
// 2.  string methods There are many methods that can act on a string to alter the string value based on the method used. Some of the more used string methods are as follows with examples:
// (length) - length property returns the length of the string by number of characters. 
var str = 'string';
console.log(str.length); // this will log 6 to the console.
// slice(start, end) - takes a values and returns a portion of the string. the start and end refer to the index of items that you wish to obtain with slice. only the start index is require for slice to work.
var sliced = str.slice(1, 4);
console.log(sliced); // will log tri to the console.
//substring(start, end) - much like slice, but any start or end values less than 0 are treated as 0.
var subs = str.substring(-1, 3);
console.log(subs); //this will log str to console.
// replace(value, replacement) allows us to replace the first matched value with the imputted replacement. 
var rep = str.replace('i', 'o');
console.log(rep); // this will log strong to the console.
//toUpperCase() and toLowerCase() are both used to change the case for letters in a string. 
var upper = str.toUpperCase();
console.log(upper); //this will log 'STRING' to the console.
var lower = upper.toLowerCase();
console.log(lower); //This will log 'string' to the console. 
//trim() will remove all whitespace from both side of string trimStart() will only remove from begining of string trimEnd() will only remove from end of string.
var trimmy = '                     I am spaced                    ';
var trimmed = trimmy.trim();
console.log(trimmed); //will log 'I am spaced' to the console.
// split() This method is useful in that you are able to convert a string to an array where each character is split by the value added in split. 
var splitty = 'split';
var splitted = splitty.split('');
console.log(splitted); // this will log ['s', 'p'. 'l', 'i', 't'] to the console.