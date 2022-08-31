// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  let flat = [];
for (let i = 0; i < array.length; i++){
  for (let j = 0; j < array[i].length; j++){
    flat.push(array[i][j]);
  }
}
return flat;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(max, min, inc, func) {
  let down = min.toString().split('')
  let d = down.slice(-2).join('')
  let up = inc.toString().split('')
  let u = up.slice(-2).join('')
  var D;
  var U = Math.floor(u);
  for (let j = 0; j > -10; j--){
    if (j == d){
     D = j;
    }
  }
  for (let i = max; i > D; i -= U){
    func(i);
  }
}
loop(3, n => n > -3, n => n - 1, console.log);

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every() {

}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection() {

}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
