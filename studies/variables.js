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
//5. var, let, and const. Further clarified. 
// i. declaration in the golobal scope/outside of functions
var xVariable;
let yVariable; // variables declared with let can't be declared again 
const zVariable = 0;  //const must be initialized at the point of declaration
console.log(xVariable); // this will log as undefined
console.log(yVariable); // this will log as undefined
console.log(zVariable); // this will log as 0, because we had to initialize the variable upon declaration when using const.
// When var is used, the variable can be redeclared later in the code as seen below
var xVariable; 
console.log(xVariable); // this will log as undefined, because we have created but not initialized the variable, and we were able to redeclare it later in the code.
// let and const are not able to be redeclared after the variable was declared earlier in the code.
let yVariable;
const zVariable = 0;
console.log(yVariable);
console.log(zVariable);
 // when we run the code, we will get a refrence error on line 48 and 49 due to yVariable and zVariable already being declared.
//  Using var outside a function variables declared with let can't be declared again const must be initialized at the point of declaration
// ii. initialization in the Global Scope - a varaible created using var or let can be reinitialized, but a variable creating using const can't. As seen below
var aa = 1;
let bb = 2;
const cc = 3;
console.log(aa);
console.log(bb);
console.log(cc);
// This will result in 1, 2, 3 printing to console.
aa = 6; 
bb = 5;
cc = 4; 
console.log(aa);
console.log(bb);
console.log(cc);
// this will result in 6 and 5 printing to the console, but there will be a reference error for cc on line 64. variables declared with const can't be redeclared.
//iii. function scope and block scope var, let, and const.
// one of var's biggest differences with let and const is variables declared with var have function scope while variables declared with let and const have block scope.
// This meas that if a var is used to declare a variable within a function, the variable will be accessible throughout the whole function, also know has parent scope.
// variables declared outside of functions will have global scope just like functions, and are accessible throughout the whole window object.
// variables declared with let and const are considered block scope. This means that declaring a variable with let or const will innately constrain the variables to be block scoped and not hoisted/accessible in the global scope. examples seen below
function isA(){
    if ( 1 < 2) {
    var aa;
    let bb;
    const cc = 0;
    };
        console.log(aa);
        console.log(bb);
        console.log(cc);
}
isA();
//when the above function is called, the variable aa will be the only one that will be logged to the console as undefined. 
//This is because variables declared with var are accessible throughout the whole function. 
// even though bb and cc are within a block scope that has a truthy conditional statement, a reference error will log to the console, because those variables declared with let and const only exsit within the curley brackets {} after the conditional. and example with further clarity is found below
//as seen above, the variables declare with var let and const were already decalared earlier in the code. since all the variables are at most function scope, 
// variables that have been declared earlier in the code with var let or const can be declared in the function scope. They will be a new variable within the function scope and will have no relation to the variables with the same name outside the function scope. 
function isB(){
    if ( 1 < 2) {
    var aa;
    let bb;
    const cc = 0;
    console.log(aa);
        console.log(bb);
        console.log(cc);
    };
}
isB();
// with the above code we can see that all variables will log to the console since we are accessing let and const within the block scope they were created. 