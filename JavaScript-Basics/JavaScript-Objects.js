// What are JavaScript Objects
// Answer: they are key:value pairs
testObject = {
    'name': 'James Quick',
    'email': 'james@learnbuildteach.com',
    'age': 28
}





// Creating Objects
// can enter multiple data types in object
const person1 = {}; // empty object

const person2 = {
    first: 'James',
    last: 'Quick',
    age: 28
}





// Working with Object Properties
// dot notation to access object properties
console.log(person2.first);

// name notation
console.log(person2['first']);

// update object properties
person2.first = 'Jessica';
person2.age = 29;
console.log(person2);

// delete properties
delete person2.age;
console.log(person2);





// Looping
for(let key in person2) {
    console.log(`${key}: ${person[key]}`);
}

const keys = Object.keys(person2);
console.log(keys);





// Equality
const person3 = {
    name: 'James'
}

const person4 = {
    names: 'James'
}

console.log(person3 == person4);
// returns false, because JavaScript Objects are pointing to different references





// ES6 Object Features
const person5 = {
    first: 'James',
    last: 'Quick',
    // objects can have keys that point to functions
    printName: function(){
        console.log(this.first, this.last); // 'this' references the object (person5)
    }
}

// spread operator makes a copy of person5
const person6 = {...person5};
console.log(person5 == person6);
// returns false, because person6 is a copy of person5

// object destructuring
// stores person5.first into first and person5.last into last
const {first, last} = person5;
console.log(first, last)