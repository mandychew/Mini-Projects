// multiplyByTwo function
function multiplyByTwo(num) {
    return num * 2;
}

// multiplyByThree function assigned as a variable
const multiplyByThree = function(num) {
    return num * 3;
}

// arrow function
// one parameter, no parenthesis
// implicit return - no need for keyword 'return'
const multiplybyFour = num => num * 4;

// arrow function with array map - multiply each item in array by 2
const newArray = [1, 2, 3, 4, 5].map(num => num * 2);

// arrow function with array filter - only even numbers
const newArray2 = [1, 2, 3, 4, 5].filter(num => num % 2 == 0);

// regular function this inside of object
// 'this' refers to the object person
const person = {
    first: "James",
    last: "Quick",
    getName: function() {
        return this.first + " " + this.last;
    }
}

// arrow function this inside of object
// doesn't work! 'this' in arrow function does not refer to the object famousPerson
const famousPerson = {
    first: "Emma",
    last: "Stone",
    getName: () => this.first + " " + this.last
}