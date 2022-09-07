// Data Types
// 0. Data types represent the different kinds of data used to store in variables. Data types are separated into two main types primitives and non-primitives.  
// 1. Primitive data types is data that can't be an object, is immutable, and also, primitives do not contain methods or properties. there are six primitives: Number, String, Boolean, undefined, null, and NaN. 
// 2. Non-primitive data types are defined as a collection of properties. there are three Non-Primitives: Object, Function, and Array.   
// 1. Primitives 
// Numbers: can be written positive or negative, and with our without a decimal.
var primitive = 1;
console.log(primitive); //This will result in 1 printing to the console.
// Strings: A collection of alphanumeric characters within either single quotes '', double quotes "", or backtick ``. each element in the string occupies a numerical possition of that string that correlates with the designated index number.
primitive = 'string';
console.log(primitive);  // This will print string to the console.
console.log(primitive[0]); // This will print s to the console.    
// Boolean: has two values of true and false. much like an on off switch. When a Boolean is created we designate it as true or false. 
primative = true;
Console.log(primitive); //This will result in true printing to the console.
// Undefined: This datatype means that the variable has been declared, but not assigned. 
var x;
console.log(x); //This will result in undefined printing to the console.
// Null: Null is like undefined, except the value of null must be set intentionally. 
primitive = null;
console.log(primitive); //This will result in null printing to the console.
// NaN: "Not a Number" is a value not represented by a real number. NaN is mostly seen when operators are used on values incorrectly, like seen in the example below. 
primitive = 1 * undefined 
console.log(primitive); //This will result in NaN printing to the console. 
//Global property infinity and -infinity
//infinity and -infinity represents the max possible positive and negative numbers. As seen below, Infinity is a numerical value representing the largest possible number.
var infin = Infinity;
var bigNum = 10000000; 
console.log(bigNum > infin); //expect this to equal false;
// 2. Non-Primitives
// Object: is a complex data type that can store collections of properties defined as key-value pairs within closed curley brackets {}. The name of property keys are always represented by a string, but the value can be any data type. 
var cookies = {
color: 'brown',
amount: 3,
tasty: true}
console.log(object); //This will result in {color: 'brown', amount: 3, tasty: true} printing to the console.
// arrays: arrays are a type of object used for holding multiple values in a single variable. Each value (also known as an element) of an array is associated with a numeric position designated by the index number. An array may contain any datatype. an array is created by inputting comma separated values within square brackets. 
var array = [a, b, 1, true, 'hello'];
console.log(array); //This will result in[a, b, 1, true, 'hello'] printing to the console.
// Function: Functions are objects that can be called to excecute a block of code performing a specific task. functions are created using the keyword function, followed by a name, followed by parentheses (), followed by the block of code to be executed within curley brakets {}. functions can contain parameters within the parentheses. The parameters allow arguements to be fed into the function acting as local variables. a function is called (or invoked) by stating the function name followed by closed paratheses including arguements within the paratheses if the function has parameters. 
function addTwo(number) {
return number + 2;
}
console.log(addTwo(1)); //This will result in 3 printing to the console.
// by copy vs by reference in a function.
// Copy by value changes the value of a variable never alters the underlying primites or objects, a copy is just passed into the function.
var greet = 'HI';
function copy(){
    var copy1 = greet;
     copy1 = `I'm different`;
  return copy1;
}
console.log(copy()); //expect to return 'I'm different'
console.log(greet); //expect to return 'HI' 
//The above variable copy1 was made and the value of greet copied to the new variable within the function scope. We are able to alter the copy without changing the variable greet.
// Copy by reference will change the object that is refrenced. any changes made to the referenced object in the function will change the underlying object.
var changed = 'I will change!';
function copyRef(){
changed = `I'm different`;
}
copyRef();
console.log(changed); // expect to return 'I'm different'
//due to the variable being refrenced instead of copyinging the value, the underlying object will be changed when the function is called.