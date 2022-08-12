//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const { set } = require("lodash");

function objectValues(object) {
return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
return Object.keys(object).join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and return all its string values in a string each separated with a space
function valuesToString(object) {
   var string = [];
    for (var keys in object)
    if (typeof object[keys] === 'string') {
    string.push(object[keys]);
}
return string.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take one argument and return 'array' if its an array and 'object' if its an object"
function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return 'array';
    }
    else {
        return 'object';}
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of one word, and return the word with its first letter capitalized"
function capitalizeWord(string) {
    return string[0].toUpperCase() + string.substring(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var newString = string.split(' ');
    var cap = [];
    for (var i = 0; i < newString.length; i++) {
        cap.push(newString[i][0].toUpperCase() + newString[i].substring(1));
    }
    return cap.join(" "); 
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object with a name property and return 'Welcome <Name>!'"
function welcomeMessage(object) {
    var string = "Welcome " + capitalizeWord(object.name) + '!';
    return string;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object with a name and a species and return '<Name> is a <Species>'"
function profileInfo(object) { 
var newString = capitalizeWord(object.name) + ' is a ' + capitalizeWord(object.species);
return newString;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'"
function maybeNoises(object) {
if (arrayOrObject(object.noises) === 'array' && object.noises.length > 0) {
    return object.noises.join(' ');
} else {
return 'there are no noises'; 
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false."
function hasWord(string, word) {
    var outcome = false;
    for (var i = 0; i < string.length; i++) {
        if (string.split(' ').includes(word)) {
            outcome = true;
        }
    }
    return outcome; 
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a name and an object and add the name to the object's friends array then return the object 
function addFriend (name, object) {//2 parameters
    object.friends.push(name); //pushes name to friends array.
    return object; //returning object. 
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and an object and return true if <name> is a friend of <object> and false otherwise
function isFriend(name, object) {  
if (arrayOrObject(object.friends) === 'array' && object.friends.includes(name)) { //test if array or object and then if name is present in friends key.
    return true;
} 
else {
    return false;}
}


//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and a list of people, and return a list of all the names that <name> is not friends with
function nonFriends(name, array) {
    //creating loop for array
    var list = [];
for (var i = 0; i < array.length; i++) {
    if (name !== array[i].name) {
if (!array[i].friends.includes(name)) {
list.push(array[i].name)
}

}
}
return list;
}


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.
function updateObject(object, key, value) {
    //takes object key and value
    //have to first test if key exists.
    if (!object.hasOwnProperty(key)) {
        //if key is present need to update prperty key with new value
        object[key] = value; 
    } else { 
    for (keys in object) {
        if (keys === key) {
            object[keys] = value;
        }
    } 
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
//Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>
//creating for loop to loop through array
for ( var i = 0; i < array.length; i++) {
    //creating an in loop to find key in object
for (var keys in object) {
    if (array[i] === keys) {
        //deleting object key if key matches array[i]
        delete object[keys];
    } 
}
}
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
// Should take an array and return an array with all the duplicates removed
return [...new Set(array)];

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}