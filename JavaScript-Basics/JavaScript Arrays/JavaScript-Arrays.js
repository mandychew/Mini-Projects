// .push() adds elements to end of an array
const arr = [];
arr.push(2)
arr.push(8)
// results in arr = [2, 8]

// zero-based indexing
const arr2 = [1, 2, 3, 4]
arr2[0] // = 1
arr2[3] // = 4

// .unshift() adds elements to beginning of an array
const arr3 = [0, 1, 2, 3, 4]
arr3.unshift(-10)
// results in arr3 = [-10, 1, 2, 3, 4]
arr3[0] // = -10

// .sort()
const names = ["James", "Jess", "Lily", "Sevi", "Padfoot"]
names.sort() 
// returns array arranged in alphabetical order 
// ["James", "Jess", "Lily", "Padfoot", "Sevi"]

// for loop - iterates through each element of array
for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// .forEach()
names.forEach( name => console.log(name))

// .map() - iterate through each element of array, and transform each element
const nums = [0, 1, 2, 3, 4, 5]
nums.map( num => num+1)
// note that nums doesn't change, map function returns a new array
console.log(num)

// .reduce() - get one element out of an array of elements
// e.g. sum up all elements
nums.reduce( (total, num) => total += num, 0)
// returns 15

// spread operator (...) - make copies of JavaScript objects such as nums
const copyNums = [...nums]

// .slice() - slice away and return a copy of what's left
const anotherClone = nums.slice()
// returns copy of nums