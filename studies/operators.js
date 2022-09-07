// Operators
// 0. Operators are used to perform an operation on a single or multiple data value(s) (or operands) to produce a result. Below I will show through examples how Operators are able to act on variables in our code.
// 1. Assignment Operator the ( = ) sign is used in initiallizing variables as seen below.
var a = '';
// using the assignment operator, I have assigned the variable a to an empty string.
// 2. Arithmetic Operators are used almost exclusively with numbers to purform simple math. 
//    Arithmetic Operators include ( + ) - plus, ( - ) - minus, ( * ) - multiplication, ( / ) - division, and ( % ) - modulo - returns remainder of division. see examples below
var num1 = 0;
num1 + 5;
console.log(num1); //should result in 5
num1 - 1;
console.log(num1); //should result in 4
num1 * 4;
console.log(num1); //should result in 16
num1 / 2;
console.log(num1); //should result in 8
num1 % 3;
console.log(num1); //should result in 2
// As seen above the Arithmetic Operators are able to perform simple math on the number value of variable num1.
// 3. Comparison Operators compare two values and evaluate to a boolean value true or false. 
//    Comparison Operators include Binary Comparison ( > ) - greater than, ( < ) - less than, ( >= ) - greater than or equal to, ( <= ) - less than or equal to, look to examples below
console.log(1 > 0); // should log true;
console.log(1 < 0); // should log false;
console.log(1 >= 1); // should log true;
console.log(1 <= 0); // should log false;
// ( === ), ( !== ) - strict vs ( == ), ( != ) -  non-strict comparison operators.
//string takes into account value and data type as seen below.
console.log(1 === '1'); //should log false 
console.log(1 !== '1'); // should log true 
//non-strict does not take into account type.
console.log(1 == '1'); //should log true;
console.log(1 != '1'); // should log false; 
// 4. Logical Operators ( && ) - AND operator, ( || ) - OR operator, are often used along with comparison operators to compare multiple values within a conditional statement. example seen below
console.log(1 > 0 && 2 < 1); // this will result in false.
//the AND operator will return false if either one of the coditions is false.  
console.log(1 > 0 || 2 < 1); // this will result in true.
//the OR operator will return true if either one of the conditions is true.
// 5. Unary Operators ( typeof ) - typeof operand ( ! ) - bang operator, only work with one value.
console.log(typeof 'happy'); // this will result in 'string'
// typeof operand will return the value's data type in a string,
console.log(!1 > 0); // this will result in false.
//the bang operator will return the oposite boolean. if the condition is true, false will be returned, and if the condition is false, true will be returned.
// 6. Ternary Operators is the only javascript operator that takes three operands. the Ternary is formated as followed: 
//    a condition followed by a (?), then an expression that tests if condition is true, followed by a (:), and the expression to execute if the condition is false. example below.
var x = 10;
var y = (x >= 5) ? x += 5 : x = 100;
console.log(y); //expect to equal 15
//ternaries are often used as an alternative to if...else statements.