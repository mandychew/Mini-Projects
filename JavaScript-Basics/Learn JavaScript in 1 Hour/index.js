// Variables --------------------------------
let isApproved = true; // Boolean Literal
let firstName = undefined;
let selectedColour = null; 

// Constants --------------------------------
const pointsToWin = 100;

// Objects ----------------------------------
let person = {
    name: 'Mosh',
    age: 30
};

//Dot Notation
person.name = 'John';

//Bracket Notation
let selection = 'name';
person[selection] = 'Mary';

// console.log(person.name);

// Arrays -----------------------------------
let selectedColours = ['red', 'blue'];
selectedColours[2] = 19;                // Objects in array and size of array are dynamic
// console.log(selectedColours.length);

// Functions --------------------------------
// Type of function: Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

// Type of function: Calculating a value
function square(number) {
    return number * number;
}

console.log(square(2));