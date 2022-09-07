//Variables 
// 
// 0. Variables act as containers in that they store data values that can be accessed and alterered during the life-cyle of the program.
// Variables are able to store different types of data such as: Boolean, Null, Undefined, Number, string, object, and others. 
// Variables are named such because a variable's value is able to be changed meaning the values can 'vary' from one point of code to the next. 
// 1. Variables are created by estrablishing a name and setting it equal to some value. Most commmonly, var, let, and const, are used before the name to establish the variable with the specific attributes associated with var, let, and const.
// 2. Variables are established first through the declaration phase which creates the variable. After a variable is declared, the next phase is assignment, which allows us to link the newly declared variable to a value. 
// 3. Variables can also be hoisted. Hoisting refers to a characteristic of variables that allows the variable to be referenced before it is declared. 
// 1. Declaration
// Below, the variable aVariable is established in the declaration phase. Since we have not assigned the variable at this point in the code, the variable will print as undefined if we console.log the variable.
var aVariable;
console.log(aVariable); // => this will print undefined
// 2. Assignment or initialization.
// Below, we assign the undeclaried variable aVariable to the value 1. which will print the value of 1 when we use console.log. 
aVariable = 1;
console.log(aVariable); //This will result in 1 printing to the console.
// 3. Re-assignment 
// Below, We are able to update a variable's value even after the variable's initial assignment. 
aVariable = 'string';
console.log(aVariable); //This will result in string printing to the console.
// 4. Hoisting
// Below, we are able to refrence the variable before the declaration of the variable. However, only the variable declaration is hoisted, not the value. 
console.log(hoist); //This will result in undefined printing to the console.
var hoist = 1;
