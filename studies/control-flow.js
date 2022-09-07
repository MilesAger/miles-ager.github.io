// Control-flow +++++++++++++++++++++++++++
// when a computer runs code, it always runs code from top to bottom. this concept is known as Control-Flow. Example seen below.
var change = 'something';
change = 'something else';
console.log(change); //expect this to equal 'something else'
// Due to the control-flow designating the code to run top to bottom, the variable change is assigned the value of 'something' on line 3, and, due to the control-flow, the variable change does not hold any influence earlier in the code than line 3. If the string value of change is returned after the reassignment seen on line 4, it will return the value 'something else'. This further emphasizes the timeline effect resulting from the control-flow.   