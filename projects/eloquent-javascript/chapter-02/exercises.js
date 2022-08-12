
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  for (var i = 1; i <= num + 1; i++) { 
    while (i < num + 1) {
      console.log("#".repeat(i));
      i++
    }
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() { //"should print numbers 1 to 15 with fizz/buzz in appropriate places" fizz on divisibles of 3 buzz on divisibles of 5
  //creating for loop to loop through num 1 - 15
  for (var i = 1; i <= 15; i++) { 
 //conditional for both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) { 
console.log('fizzbuzz'); 
 }
 //conditional for divisible 3. 
else if (i % 3 === 0){
  console.log('fizz');
} //condtional for divisible 5
else if (i % 5 === 0) {
console.log('buzz');
}
else {console.log(i)} //print number if no other conditional.
}
}
////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//parameter is a number 
function drawChessboard(num) {
  //drawing a chess set using alternating strings of ' # # # #', and '# # # # '
  //using for loop. 
  var chess = [];
  for (var i = 0; i < num; i++) {
    if (num === 1) {
      chess.push(' ');
    }
    else if (i % 2 === 0) { //even push this to chess
      chess.push(' #'.repeat(~~(num / 2)));
    }
    else
   {chess.push('# '.repeat(~~(num / 2)))} //odd push this to chess
  }
return chess.join('\n');//return chess with values all pushed to new lines
}
console.log(drawChessboard(1));
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
