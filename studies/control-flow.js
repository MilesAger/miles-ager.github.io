// Control-flow +++++++++++++++++++++++++++
// 0. conditional statements allow us to control the flow of our application. based on whether conditions are true or false, we are able to control whether a block of code runs.
//    conditional statements are comparisons and/or values evaluated to either true or false.
// 1. if, else-if, and else statements. These are the 3 keywords typically used in conditional statements. 
// conditional statements will typically start with an if statement, followed by an else if statement to test other conditionals, followed by the else statement which has no conditional. an example of an if, else-if, else statement can be seen in the below example.
var a = 10;

if (a <= 5){
    console.log('small');
}
else if (a > 5 && a <= 10){
    console.log('medium');
} else {
    console.log('large');
}; 
//after this code is run 'medium' will be logged to the console. because the condition in the else if condition is met. 
// if, else-if, else statement further clarification. 
//if is used to specify a block of code to be execuded if the conditional statement right after the if keyword is true.
// else if specifies a new condition to test only if the first condition/ or previous condition is false. 
//else is placed before a block of code to be executed if all previous if, or else-if conditional statements were false. else does not have a conditional statement that must be true in order for the code to run. If the code hits else, the code in the curley brackets after the else keyword will run.
//The if, else-if, else statement can chain together any number of else-if statements to the first if. each conditional statement tests the condition in parenthesis () and then executes the code in the body if the condition is true.
// 2. Switch Statements.
// switch Statements can sometimes be a cleaner way to test a large amount of conditions.
// switch statement evaluates an input expression. the expression value is then tested whether any of the case clauses match the input expression. if a case is matched, then the following statement associated with the case is executed. the break statement is used to end the case. example seen below.
var animal = 'dog';
switch (animal){
    case 'cat' :
        console.log('meow');
        break;
        case 'parrot' :
            console.log('chirp');
            break;
            case 'dog' :
                console.log('woof');
                break;
                default: 
                console.log('none found')
}
//the above code will result in 'woof' being logged to the console.
