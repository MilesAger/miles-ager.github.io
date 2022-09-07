// Loops
// 0. Loops in javascript are designed to execute a block of code a designated number of times based on the three set expressions. 
// expression 1 - sets a variable before the loop starts. (let i = 0)
// expression 2  - define the condition for the loop to run (i must be less than 10).
// expression 3 - determines the incremental increases or decreases of the value each time the code block is run (i++) or (i--). expression 3 is optional and can be omitted if you increment or decrement the value inside the loop.
// 1. While, for, and for-in loops:
// The While loop will execute a block of code as long as the specified condition stated directly after the While keyword is true. the while loop is traditionally set up as seen below
var a = 1;
while (a <= 3){
    console.log('Countup ' + a);
    a++;
} 
// this will result in 'Countup 1' 'Countup 2' 'Countup 3' printing to the console. 
// while loop can also decrement. as seen below.
while (a > 0){
    console.log('Countdown ' + a);
    a--;
} 
//This will result in 'Countdown 4' 'Countdown 3' 'Countdown 2' 'Countdown 1' printing to console.
//This occurred because the previous incrementing while loop still performed the a++ expression, which causes the while condition (a <= 3), to be false.
// The while loop is like a for loop with expression 1 and expression 3 omitted, because of this, the while loop is a little more limited than a for loop.
// For Loop ++++++++++++++
// the for loop statement creates a loop with 3 expressions as seen in the introduction under section 0. 
// A for loop statement will often look like 'for (let i = 0; i < 5; i++)' followed by a block of code to be executed a number of times based on the loop expressions. Example of for loop seen below.
var arr = [1, 3, 'b', '$'];
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
// this will log 1, 3, 'b', '$' to the console. 
// for loops are also able to decrement as seen below. 
for (let i = arr.length - 1; i >= 0; i--){
    console.log(arr[i]);
}
// this will log '$', 'b', 3, 1 to the console.
// as seen above I am using the for loop to increment and decrement through an array. for loops like the one seen above, are most commonly used in relation to arrays since each array element has a corresponding index number.
// in order to loop through objects we need a different kind of for loop, a for-in loop
// For-in Loop +++++++++++++++
// for-in loop statement loops through the properties of an object and executes the block of code for each property. 
//The for-in statement consists of one expression that will return a key for each iteration until all properties have been looped through, or the loop is exited like with return. example below.
var object1 = {a: 1, b: 'y', c: 100};
for (let key in object1){
console.log([key], object1[key]);
} 
// This will log ['a'] 1, ['b'] 'y', ['c] 100 to the console. 
// using the for in loop, we are able to return each property allowing us to access the property values in order to alter, copy, or delete items from the underlying object.  

