/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//  Creating a variable named `animal` and assign it to an empty object.
var animal = {}; 
//  using **dot notation** give `animal` a **property** named `species` with a value of any animal species.
animal.species = 'dog';
//   Using **bracket notation** give `animal` a **property** called `name` with a value of your animal`s name.
animal['name'] = 'spot';
//  Using either notation, give `animal` a **property** called `noises` with a value of empty array.
animal.noises = [];
//  6. printing `animal` Object to the console by adding, `console.log(animal);`,
console.log(animal);
//  7. [ ] Save your work (command-s || ctrl-s), switch back to the browser tab with your website running, and refresh your page to see what `animal` looks like.
//  8. [ ] It should be something like: 



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Createing a variable named `noises` and assign it to an empty array.
var noises = [];
//  Using **bracket notation** to give `noises` it's first element. A string representing a sound your animal might make.
noises.push('bark');
//  Using an array function will add another noise to the end of `noises`.
noises.push('woof');
//  6. [ ] Add an element to `noises` using unshift.
noises.unshift('ruff');
//Using **bracket syntax** to add another element to the end of `noises`. Make sure that the way you do this step would work no matter how many elements `noises` had. In other words, don't hard code the position of the new element.
noises[noises.length] = 'howl';
//    `console.log` the length of `noises`
console.log([noises.length]);
//   `console.log` the last element in `noises` again without hard coding the index.
console.log(noises[noises.length - 1]);
// `console.log` the whole array.
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Step 3 - Combining Step 1 and 2
//   Using **bracket syntax**, assigning the `noises` property on `animal` to our new `noises` array.
animal['noises'] = noises;
//   Using bracket syntax add another noise to the `noises` property on `animal`.
animal['noises'].push('awooo');
//   `console.log` `animal`
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * 
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}