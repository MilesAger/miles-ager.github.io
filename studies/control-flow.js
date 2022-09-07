// Control-flow +++++++++++++++++++++++++++
// 0. conditional statements allow us to control the flow of our applicating. based on whether conditions are true or false, we are able to control whether a block of code runs.
//    conditional statements are comparisons and/or values evaluted to either true or false.
// 1. if, else-if, and else statements. These are the 3 keywords typically used in conditional statems. 
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
//after this code is run 'medium' will be logged to the console. because the condition in the else if coindition is met. 
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
