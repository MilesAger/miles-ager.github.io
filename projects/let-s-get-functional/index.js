// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./miles-ager.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
//  - **Objective**: Find the number of male customers
//  - **Input**: `Array`
//  - **Output**: `Number`
//  - **Constraints**: use `filter`
// _.filter = function(array, func){
//     //looping through elements
//     var collect = [];
// for (var i = 0; i < array.length; i++){
//     //putting in function
//     if (func(array[i], i, array)){
// collect.push(array[i]);
//     }
// }
// return collect;
// }
var maleCount = function(array) {
    //looping through array to return number of male objects.
    let males;
    males = _.filter(array, function(element, i, array) {
           return (element.gender === "male")
            
        });
     return males.length
    }


var femaleCount = function(array) {
    //looping through array to return number of male objects.
    let female;
    female = _.filter(array, function(element, i, array) {
           return (element.gender === "female")
            
        });
     return female.length
    }

//     `oldestCustomer`
//  - **Objective**: Find the oldest customer's name
//  - **Input**: `Array`
//  - **Output**: `String`
//  - **Constraints**:

// _.map = function(collection, func) {
//     //call function for each element in collection parameter.
//     let output = [];
// if(Array.isArray(collection)){
//     for (let i = 0; i < collection.length; i++) { 
//         output.push(func(collection[i], i, collection)); 
// }
// } else { 
//     for (let key in collection) {
//         output.push(func(collection[key], key, collection));
//     }
// }
// return output;
//     //if collection is array, elemet 
// }

var oldestCustomer = function(array){
   //attempting to use .reduce function to 
   let total = 0;
   let OldestPerson = '';
  array.reduce((prev, curr) => {
    if ((curr.age) > total) {
      total = (curr.age);
      OldestPerson = curr.name
    }
    return prev;
  })
  return OldestPerson
}

var youngestCustomer = function(array){
  //attempting to use .reduce function to 
  let total = 100;
  let youngest = '';
 array.reduce((prev, curr) => {
   if ((curr.age) < total) {
     total = (curr.age);
     youngest = curr.name
   }
   return prev;
 })
 return youngest;
};

var averageBalance = function(array){
  var total = 0;
  for(var i = 0; i < array.length; i++) {
      total += Number(array[i].balance.replace(/[$,]/g, ''));

  }
 
 return total / array.length;
}


// (array) => {let average = array.reduce((a.balance, b.balance) => { 
//   (a.balance + b.balance)}); 
//   average /= array.length;
// return average;
// }

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
