// Basic Truthy/Falsy
const firstName = 'James';
// empty string, null, undefined will trigger falsy value

if(!firstName) {
    console.log('no name')
}
else {
    console.log('Hey ' + firstName);
}





// Object vs Primitive Equality
const person1 = {
    name: 'James',
    age: 30
}

const person2 = {
    name: 'James',
    age: 30
}

console.log(person1 == person2); 
// returns false because person1 and person2 (objects) point to different parts in memory

const person3 = person1 
// person1 == person3 as they are pointing to the same space in memory

console.log(person1.name == person2.name); 
// returns true because it's comparing primitive values, not where it's stored in memory





// Numbers and Strings can be Equal and Added Together
const age = 30;
const ageStr = '30';

console.log(age == ageStr) 
// returns true, because '==' doesn't take data type in account

console.log(age === ageStr) 
// returns false, because '===' looks at data type

console.log(age + ageStr) 
// returns 3030





// 'false' is true(thy)
const devMode = 'false'

if(!devMode) {
    console.log('not dev')
}
else {
    console.log('dev')
}
// returns 'dev', because devMode is a string which is truthy
// to solve the problem...
if(devMode === 'false') {
    console.log('not dev')
}
else {
    console.log('dev')
}





// Empty arrays/objects are not false
const arr = [];

if(!arr) {
    console.log('no array')
}
else {
    console.log('we got one!!')
}
// returns 'we got one!!' as empty arrays are not false
// if arr = null or arr = undefined, returns 'no array'

// to check for an empty array...
if(!arr) {
    console.log('no array')
}
else if(arr.length === 0) {
    console.log('we got an empty one!!')
}
else {
    console.log('we got one!!')
}