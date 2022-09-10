//Variables 
// 
// 0. Variables act as containers in that they store data values that can be accessed and altered during the life-cycle of the program.
// Variables are able to store different types of data such as: Boolean, Null, Undefined, Number, string, object, and others. 
// Variables are named such because a variable's value is able to be changed meaning the values can 'vary' from one point of code to the next. 
// 1. Variables are created by establishing a name and setting it equal to some value. Most commonly, var, let, and const, are used before the name to establish the variable with the specific attributes associated with var, let, and const.
// 2. Variables are established first through the declaration phase which creates the variable. After a variable is declared, the next phase is assignment, which allows us to link the newly declared variable to a value. 
// 3. Variables can also be hoisted. Hoisting refers to a characteristic of variables that allows the variable to be referenced before it is declared. 
// 1. Declaration
// Below, the variable aVariable bvariable, and cVariable are established in the declaration phase. Since we have not assigned the variable at this point in the code, the variable will print as undefined if we console.log the variables declared with var and let.
var aVariable;
let bVariable; // variables declared with let can't be declared again 
const cVariable = 0;  //const must be initialized at the point of declaration
console.log(aVariable); // => this will print undefined
// 2. Assignment or initialization.
// Below, we assign the undeclared variable aVariable to the value 1, and assign the undeclared variable bVariable the value 2. which will print the value of 1 and 2 when we use console.log. 
aVariable = 1;
bVariable = 2;

console.log(aVariable); //This will result in 1 printing to the console.
console.log(bVariable);
// 3. Re-assignment 
// Below, We are able to update a variable's value even after the variable's initial assignment. This can only be done with var and let keyword variables 
aVariable = 'string';
bVariable = 3;
console.log(aVariable); //This will result in string printing to the console.
console.log(bVariable); // this results in 3 printing to the console.
// 4. Hoisting
// Below, we are able to reference the variable before the declaration of the variable. However, only the variables declared with var are hoisted globally.  
console.log(hoist); //This will result in undefined printing to the console.
console.log(hoist2); //this will result in a reference error: cant access before initialization, because variables declared with let are not hoisted to the global scope. 
console.log(hoist3); //this will result in a reference error: cant access before initialization, because variables declared with const are not hoisted to the global scope. 
var hoist = 1;
let hoist2 = 1; 
const hoist3 = 1; 
