// Functions
// 0. Functions allow us to encapsulate a block of code, which creates it's own scope that can't be accessed globally, however, functions are able to access all variables within the parent or global scope. 
//    Calling the function allows us to execute the block of code.
//    Functions are considered logic data.  They provide a list of instructions that can be accessed at a later point in the code.
// 1. two phases of function declaration/definition - creating the function, and invocation/calling/executing/applying: using the function. examples below.
function a(){
    console.log('I am a function');
}
// the above code represents the first phase, declaration. 
// to use the function we must call it as seem below.
a();
//calling the function will result in 'I am a function' printing to the console.
// 2. function parameters and arguments. Inputs / output
//    It is optional for functions to have parameters also know as inputs. Parameters are names listed in the function declaration. 
//    They act as the place holders for the real values (arguments) that will be passed to the function if the function is called. example below
var hello = 'hello';
function logIt(string){ //string is the parameter name.
    console.log(string);
}
logIt(hello); // here we are passing the argument into the function when we call it. the argument will replace all instances of the parameter name in the function with the argument. 
// the above function a function call will result in 'hello' printing to the console.
//functions will return a single output. By default this output is undefined. otherwise we can use the return keyword followed by a value to return that value and exit the function. 
// 3. named functions and assigning functions to variables.
// a named function has a specific syntax. The two previous function examples are named functions. the format is (function name(){}) 
// The names of the two previous functions  are a, and logIt. Named function declarations are hoisted to the top of their scope. so they can be used before they are defined.
// assigning an anonymous function (which is a function declared without a name) to a variable is known as a function expression. an example can be seen below.
var funky = function(){
    console.log('assigning a function definition to variable is an example of why functions are first class object')
} 
funky();
// this will log 'assigning a function definition to variable is an example of why functions are first class object' to the console.
// 4. Closure 
// A function within a function is able to have references in its body to variables in the outer function's scope also known as the parent scope, but we can't access these variables outside the function. example below.
function out(){
    var name = 'Tom';
    function inside(){ // when the function is called, this function becomes a closure.
        console.log(name);
    }
    inside();
}
out(); // results in one closure.
// This will log 'Tom' to the console.
// the inner function is a closure every time the function is called.  
// closure allows for functions to encapsulate data, meaning that objects returned from a function can be held in the outer scope, also known as the parent scope, while the data continues to exist in the closure. example below
function countBugs(){
    var bugNum = 0;
   return function(){
        bugNum += 1; 
        console.log(bugNum);
    }
}
var oneBug = countBugs();
oneBug();
oneBug();
oneBug();
// Here the inner function is accessing the variable bugNum in the parent scope, and modifying it's value. 
// the above code will result in 1, 2, 3 printing to the console. This shows that the closure found in the function countBugs allows for the variable bugNum to be kept in the function scope. 
// bugNum is only able to be modifyed when the function countBugs is called.
