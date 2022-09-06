// const dogs = require('./dogData');
let dogs = [
    {
        "name": "Doggo-co-WOOF",
        "age": 3,
        "species": "dog",
        "weight": 45,
        "votes": 22
    }, {
        "name": "Space CATdet",
        "age": 4,
        "species": "cat",
        "weight": 20,
        "votes": 5
    }, {
        "name": "Solar Squirrel",
        "age": 1,
        "species": "squirrel",
        "weight": 0.5,
        "votes": 13
    }, {
        "name": "Bark Hole",
        "age": 20,
        "species": "dog",
        "weight": 19,
        "votes": 20
    }, {
        "name": "Howlling Winds",
        "age": 55,
        "species": "dog",
        "weight": 90,
        "votes": 200
    }, {
        "name": "Electron Nutria",
        "age": 7,
        "species": "nutria",
        "weight": 3,
        "votes": 0
    }, {
        "name": "Howlling Winds Sr.",
        "age": 59,
        "species": "dog",
        "weight": 101,
        "votes": 201
    }, {
        "name": "Tycho Brahe",
        "age": 35,
        "species": "moose",
        "weight": 500,
        "votes": 123
    }, {
        "name": "Johannes Kepler",
        "age": 9,
        "species": "dog",
        "weight": 5,
        "votes": 55
    }, {
        "name": "Pluto",
        "age": 89,
        "species": "dog",
        "weight": 10,
        "votes": 190
    }, {
        "name": "Quark",
        "age": 20,
        "species": "dog",
        "weight": 1,
        "votes": 45
    }, {
        "name": "Higgs",
        "age": 26,
        "species": "dog",
        "weight": 0.00001,
        "votes": 200
    }, {
        "name": "Lepton",
        "age": 12,
        "species": "dog",
        "weight": 15,
        "votes": 175
    }, {
        "name": "Boson",
        "age": 9,
        "species": "dog",
        "weight": 8,
        "votes": 141
    }
]
// Assign a function to our our `greeting` variable that takes 3 inputs: `greeting`, `location` and `time`. Concatanate these values together to form a viable sentence and log it to the console.
//     Don't forget the spaces!
// 1.
var greeting = function(greeting, location, time){
    let output = greeting.concat(' ', location);
    let final = output.concat(' ', time);
    console.log(final);
}

// We have more contestants than anticipated. (We actually don't have a count!)
//     Assign a function to our `contestants` variable that will return the number of entries in our dogs array. 

// 2.
var contestants = function(array){
    var count = 0;
    array.forEach(element => {
        count += 1;
    });
    return count;
}


// Oh no! Some of our contestants aren't even dogs!
//     Using the native filter method with our `dogs` array, create an array called `filterSpecies` that will filter out all of the species that are not dogs! 
// 3.
var filterSpecies = dogs.filter(function(element){
    if (element.species === 'dog'){
        return true;
    }
   })
//    For safty purposes, let's create a copy of our array. Using the spread operator, assign a copy of our `filteredSpecies` array to our `dogContestants` variable.
// 4. 
var dogContestants = [...filterSpecies];


// Now that we have our `dogContestants` array, we need to add a `class` property to each dog object.
//     Using the native map method, add a key of `class` with the value:
//         - "red" if the dog's weight is between 0 and 10.
//         - "yellow" if the dog's weight is between 11 and 20.
//         - "green" if the dog's weight is 21 or over.
// 5. 
var dogsWithClasses = 
   dogContestants.map(function(element){
        if (element.weight <= 10){
            element['class'] = 'red';
            return element;
        }
        else if (element.weight >= 11 && element.weight <= 20){
            element['class'] = 'yellow';
            return element;
        } else {
            element['class'] = 'green';
            return element;
        }
    })


// 6.
// The votes are in! We have an array of the top dogs in each class
// Using recursion, copy all of the properties into one object and return that object. If you'd like an idea of our data structure, look in the dogData.js file.
var firstInClass = function(array, output = {}){
    //base
    if (array.length === 0){
        return output;
        //recursion
    } else { Object.assign(output, array[0]);
        return firstInClass(array.slice(1), output);
    }
    }
    //recursion




// 7.
// For statistical reasons, lets count all of the votes we recieved for our dog and non-dog contestants!
//     Using reduce, find the sum of the votes casted.
var votes = dogs.reduce(function(acc, cur, index, collection){
    return acc + cur.votes;
}, 0);